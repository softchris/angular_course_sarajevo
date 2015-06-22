angular
	.module('app')
	.directive('isolatedDirectiveValue', function(){
		return {
			restrict : 'E',
			replace : true,
			scope :{
				title :'@',
				description : '@'
			},
			template : '<div><h2>{{title}}</h2><p>{{description}}</p></div>',
			controller : function($scope){
				
			}		
		}
	});