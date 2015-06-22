angular
	.module('app')
	.directive('infoCard', function(){
		return {
			replace : true,
			restrict : 'E',
			
			template : '<div class="info-card">'+
							'<h2>{{title}}</h2>'+
							'<p><input type="text" ng-model="content" /></p>'
					  +'</div>',
			scope : false
		}
	})