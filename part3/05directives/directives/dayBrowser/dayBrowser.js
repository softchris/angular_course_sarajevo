angular
	.module('app')
	.directive('dayBrowser', function(){
		return {
			replace : true,
			restrict : 'E',
			scope : {
				dayChanged : '&'
			},
			templateUrl : 'directives/dayBrowser/dayBrowser.html',
			link : function(scope, element, attrs){
				scope.day = new Date();
				
				function addDays(currentDate, days){
					var newDate = new Date(currentDate);
					newDate.setDate(currentDate.getDate()+days);
					return newDate;	
				};
				
				scope.incrementDate = function(val){
					scope.day = addDays( scope.day, val);
					scope.dayChanged({ date : scope.day });
				};
			}	
		};
	});