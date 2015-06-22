angular
	.module('app')
	.factory('dataService', function($http){
		return {
			get : function(){
				return $http.get('data/user.json');	
			} 	
		};
	});