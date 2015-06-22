angular
	.module('app')
	.controller('productsDetailController', ProductsDetailController);
	
function ProductsDetailController( 
	$scope, 
	$routeParams,
	productsService,
	$location ){
	
	$scope.title = "Products detail page";
	$scope.product = productsService.getProductById( $routeParams.id ) ;
}