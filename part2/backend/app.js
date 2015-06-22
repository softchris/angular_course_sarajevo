angular
	.module('app', [])
	
	.controller('appController', function($scope, dataService){
		dataService.getData().then(function(aggregatedData){
			console.log('aggregated data');
		});	
	});
	
	
	
	
	