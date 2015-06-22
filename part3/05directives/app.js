angular
	.module('app',['ngRoute'])
	.config(function($routeProvider){
		$routeProvider.when('/Default', {
			template : 'default',
			controller : function($scope){
				
			} 
		})
		.when('/ServerError', {
			template : 'Server Error',
			controller : function($scope){
				
			} 
		})
		.when('/PageNotFound', {
			template : 'Page Not Found',
			controller : function($scope){
				
			} 
		})
		.when('/Error', {
			template : 'Error',
			controller : function($scope){
				
			} 
		});
	})
	.factory('eventService', function($rootScope){
		return {
			publish : function(eventName, data){
				$rootScope.$emit(eventName,data);
			},
			subscribe : function(eventName, callback){
				$rootScope.$on(eventName, callback);
			}
		}
	})
	.controller('firstController', function($scope, $rootScope, eventService){
		eventService.subscribe('app_event', function(event, data){
			$scope.appMessage = data.data;
		})
		
		$scope.$watch('firstValue', function(newValue, oldValue){
			if (newValue === oldValue) return;
			
			$rootScope.$broadcast('value_changed',newValue);
		});
	})
	.controller('secondController', function($scope){
		$scope.$on('value_changed',function(event, val){
			$scope.secondValue = val;
		});
	})
	.controller('appController', function($scope, dataService, hierarchService, allService, $http, eventService){
		$scope.send = function(){
			eventService.publish('app_event',{ data : 'data from app controller' });	
		};
		
		$scope.title= "my title";
		$scope.content = 'my content';
		$scope.changed = function(date){
			console.log('changed date' + date);	
		};
		
		hierarchService.call(function(response){
			console.log(response);	
		});
		
		allService.call().then(function(results){
			console.log(results);
		});
		//dataService.call();
		
		$http.get('http://tjollahopp.nu').then(function(result){
			console.log('damn it existed');
		});
		
	})
	.factory('allService', function($q, $timeout){
		function longRunningService(){
			var deferred = $q.defer();
			$timeout(function(){
				deferred.resolve('long');	
			},4000);
			
			return deferred.promise;
		}
		
		function shortRunningService(){
			var deferred = $q.defer();
			$timeout(function(){
				deferred.resolve('short');	
			},1000);
			
			return deferred.promise;
		}
		
		function call(){
			return $q.all([shortRunningService(), longRunningService() ]);
		}
		
		return {
			call : call
		}
	})
	.factory('hierarchService', function($q){
		function validateRequestIsAuthenticated(){
			var deferred = $q.defer();
			deferred.resolve('a');
			return deferred.promise;	
		}
		function validateParameters(){
			var deferred = $q.defer();
			deferred.resolve('b');
			return deferred.promise;	
		}
		function loginUser(){
			var deferred = $q.defer();
			deferred.resolve('c');
			return deferred.promise;	
		}
		function getProducts(){
			var deferred = $q.defer();
			deferred.resolve('d');
			return deferred.promise;	
		}
		
		function call(){ 		
			return validateRequestIsAuthenticated()
				.then(validateParameters)
				.then(loginUser)
				.then(getProducts)
				.then(function(products){
					return products;
				}, function(error){
					// something failed wit one of our calls
					
				});
		}
			
		return {
			call : call 	
		};
	})
	.factory('dataService',function($q){
		function getData(value){
		    var deferred = $q.defer();
		    if (value > 5) {
		        deferred.resolve("higher than five");
		    } else {
		        deferred.reject("boo too low");
		    }
		    
		    return deferred.promise;
		}
		
		function callData(){
		    getData(6).then(function (result) {
		        console.log(result); // returns 'higher than five'
		    });
		
		    getData(1).then(function (result) {
		        // never comes here
		    }, function (error) { 
		        console.log(error); // returns 'boo too low'
		    });
		}

		return { 
			call : callData
		};
	})
	.factory('authService', function(){
		return {
			isLoggedIn : function(){
				return true;
			},
			token : 'aToken'
		};
	});
	
	
	angular
		.module('app').config(['$httpProvider', function($httpProvider) {  
    		$httpProvider.interceptors.push('customHeaderInterceptor');
			$httpProvider.interceptors.push('errorHandlerInterceptor');
		}]);;
	
	