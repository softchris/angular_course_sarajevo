angular
	.module('app')
	.controller('someOtherController', SomeOtherController);
	
function SomeOtherController($scope, someService, someFactory){
	$scope.result = someService.calc(6,6);
	$scope.result = someFactory.calc(5,5);
}