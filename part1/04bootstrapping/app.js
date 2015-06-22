
angular
	.module('app', ['ngRoute'])
	.constant('routes', {
		home : {
			route : '/Home',
			templateUrl : '/app/default/default.html',
			controller : 'defaultController'
		},
		about : {
			route : '/About',
			templateUrl : '/app/about/about.html',
			controller : 'aboutController'
		},
		productList : {
			route : '/Products',
			templateUrl : '/app/products/index.html',
			controller : 'productsController'
		},
		productDetail : {
			route : '/Products/:id',
			templateUrl : '/app/products/detail.html',
			controller : 'productsDetailController'
		}
	})
	.config(function($routeProvider, routes){
		for(var routeName in routes){
			var routeEntry = routes[routeName];
			
			$routeProvider.when(routeEntry.route, {
				templateUrl : routeEntry.templateUrl,
				controller : routeEntry.controller,
				caseInsensitiveMatch: true
			});
		}
		
		$routeProvider
			.otherwise({
				redirectTo : routes.home.route
			});	
	});
	
	
