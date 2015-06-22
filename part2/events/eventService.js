angular
	.module('app')
	.factory('eventService', function($rootScope){
		return {
			publish : function(eventName, obj){
				$rootScope.$emit(eventName, obj);
			},
			subscribe : function(eventName, callback){
				$rootScope.$on(eventName, callback);
			}	
		}
		
	});