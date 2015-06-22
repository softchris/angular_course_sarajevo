angular
	.module('app')
	.directive('infoCardImproved', function(){
		return {
			replace : true,
			restrict : 'E',
			template : '<div class="info-card-improved">'+
							'<h2>{{title}}</h2>'+
							'<p><input type="text" ng-model="text" /></p>'
					  +'</div>',
			scope : true,
			controller : function($scope){
				$scope.text = 'empty text';
				$scope.title = 'infoCardImproved';
			}
		}
	})