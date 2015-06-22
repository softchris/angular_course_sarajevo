angular
	.module('app')
	.controller('defaultController', DefaultController);
	
function DefaultController( 
	$scope, 
	$location, 
	routes ){
	
	$scope.title = "Default";
	$scope.prefixThis = "abc";
	
	$scope.navigate = function(){
		$location.path( routes.about.route );		
	};
}
