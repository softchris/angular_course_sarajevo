angular
	.module('app', [])
	
	.controller('appController', function($scope, eventService, dataService, events){
		dataService.get().then(function(result){
			eventService.publish(events.user_loaded, result.data);
			$scope.user = result.data;	
		});
	})
	.controller('anotherController', function($scope, eventService, events){
		eventService.subscribe(events.user_loaded, function(event, user){
			$scope.user = user;
		});
	});
	
	
	
	
	