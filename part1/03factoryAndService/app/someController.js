angular
	.module('app')
	.controller('someController', SomeController);
	
function SomeController( 
	$scope, 
	someFactory, 
	someService, 
	SomeFactoryModel ){
	
	$scope.result = someFactory.calc(1,1);
	$scope.result2 = someService.calc(1,1);
	$scope.userInstance = new SomeFactoryModel({ name : 'christoffer',address : 'Sweden', email : 'a@b.com' });
}