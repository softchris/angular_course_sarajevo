angular
	.module('controllers')
	.controller('userController', function($scope, userService){
		
		$scope.load = function(){
			userService.get().then(function(result){
				$scope.user = result.data;
			});	
		}
				
	});

