angular
	.module('app')
	.factory('dataService', function($http, $q){
			
		function a(){
			return $http.get('data/products.json').then(function(r){
				return r.data;
			});;
		}
		
		function b(){
			return $http.get('data/clients.json').then(function(r){
				return r.data;
			});
		}
		
		function c(){
			var deferred = $q.defer();
			
			$q.all([a(),b()]).then(function(results){
				var products = results[0];
				var clients = results[1];
				
				var obj = {
					name : products[0].name + " " + clients[0].name,
					price : products[0].price,
					address : clients[0].address
				};
				
				deferred.resolve(obj);
			});
			
			return deferred.promise;
		}
		
		return {
			getData : c 
		};
	});