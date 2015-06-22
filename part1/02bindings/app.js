angular
	.module('app',[])
	controller('appController', function($scope){
		$scope.title = 'title';
		$scope.user = {
			name : 'pelle'
		};
	});