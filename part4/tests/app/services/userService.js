angular
	.module('services')
	.factory('userService', function(User, $http){
		var that = {};
	
		that.doStuff = function(){
			
		};
		
		that.get = function(){
			return $http.get('/users/1');
		}; 
	
		return that;	
	});

