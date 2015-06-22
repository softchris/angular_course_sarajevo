angular
	.module('app')
	.directive('tabs', function(){
		return {
			restrict : 'E',
			replace: true,
			controller : function($scope){
				var tabs = [];
				this.addTab = function(tab){
					tabs.push(tab);
				};
				
				this.expand = function(tab){
					tabs.forEach(function(tab){
						tab.collapse = true;
					});
					$scope.$apply(function(){
						tab.collapse = false;	
					});
				};
			}	
		};
	});