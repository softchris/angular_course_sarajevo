angular
	.module('app')
	.directive('bigHeader', function(){
		return {
			replace : true,
			restrict : 'E',
			template : '<h1>title</h1>',
			inherit : false
		}
	})