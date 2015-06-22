angular
	.module('app')
	.directive('directive',['service', function(service){
	return {
		restrict : 'E',
		replace : true,
		template : '<h1>{{title}}</h1>'
	};
}]);

