angular
	.module('app')
	.directive('tab', function(){
		return {
			restrict : 'E',
			replace: true,
			scope : {
				
			},
			require: '^tabs',
			template : '<div class="tab"><h1>tab header</h1><div ng-hide="collapse" class="body">tab content</div></div>',
			link : function(scope,element, attributes, tabs){
				scope.collapse = true;
				
				tabs.addTab(scope);
				
				element.on('click', function(){
					var oldValue  = scope.collapse;
					scope.collapse = !oldValue;
					if(!scope.collapse){ // if collapse false set all other tabs to true and your to false
						tabs.expand(scope);
					}
				});	
			}	
		}
	});