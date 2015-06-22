angular
	.module('services')
	.factory('Calculator', function(){
		var that = {};
	
		that.add = function(lhs,rhs){
			return lhs+rhs;
		};
		
		that.sub = function(lhs,rhs){
			return lhs - rhs;
		};
	
		return that;	
	});

