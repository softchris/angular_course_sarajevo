angular
	.module('app')
	.controller('productsController', ProductsController);
	
function ProductsController( 
	$scope, 
	productsService,
	$location ){
	
	$scope.title = "Products list";
	$scope.products = productsService.getProducts();
	
	$scope.page = $location.search()['page'];
	$scope.pageSize = $location.search()['pageSize'];
	
	$scope.filterParameter = '+price';
	
	$scope.toggleSort = function(sortField){
		var prefix = '+';
		if($scope.filterParameter.startsWith('+')){
			prefix = '-';
		}
		$scope.filterParameter = prefix + sortField;
	}
}
