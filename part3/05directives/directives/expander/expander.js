angular
	.module('app')
	.directive('expanderDirective', function(){
		return {
			link : function(scope, element, attributes){
				var bodyElem = element.find('.body');
				var visibleBody = true;
				
				element.on('click', function(){
					scope.$apply(function(){
						if (visibleBody){
							bodyElem.hide();	
						}else{
							bodyElem.show();
						}
						
						visibleBody = !visibleBody;
						
					});
				});
			}
		}
	});