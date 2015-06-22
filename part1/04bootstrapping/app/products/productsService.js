angular
	.module('app')
	.factory('productsService', ProductsService);
	
function ProductsService(){
	var products = [
		{
			name : 'tomato', id : "1",
			price : 114
		},
		{
			name : 'cucumber', id : "2",
			price : 50
		},
		{
			name : 'can of beans', id : "3",
			price : 60
		}	
	];
	
	return {
		getProducts : function(){
			return products;
		},
		getProductById : function(id){
			for(var i=0; i< products.length; i++){
				if(products[i].id === id){
					return products[i];
				}
			}
			
			return null;
		}
	}
}