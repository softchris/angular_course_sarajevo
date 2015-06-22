angular
	.module('services')
	.factory('mathService', function(Calculator){
		var that = {};
	
		that.add = function(lhs,rhs){
			return Calculator.add(lhs,rhs);
		};
		
		that.sub = function(lhs,rhs){
			return Calculator.sub(lhs,rhs);
		};
	
		return that;	
	});

