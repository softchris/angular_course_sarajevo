angular
	.module('app')
	.factory('customHeaderInterceptor', function(authService){
		return {
			request : function(config){
				if(authService.isLoggedIn()){
					config.headers['Authentication'] = authService.token;	
				}
				
				return config;
			}
		}
	});