angular
	.module('app')
	.factory('errorHandlerInterceptor', function($location){
		return { 
			responseError : function(errorResponse){
				if(errorResponse.status === 401 ){
					$location.path('/PageNotFound');
				}else if(errorResponse.status >= 500 ){
					$location.path('/ServerError');
				}else{
					$location.path('/Error');
				}
			}	
		};
	});
	
	