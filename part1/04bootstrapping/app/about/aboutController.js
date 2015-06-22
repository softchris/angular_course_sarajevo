angular
	.module('app')
	.controller('aboutController', AboutController);
	
function AboutController( $scope ){
	$scope.title = "About";
}