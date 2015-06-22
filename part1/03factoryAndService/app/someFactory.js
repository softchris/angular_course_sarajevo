angular
	.module('app')
	.factory('someFactory',SomeFactory);

function SomeFactory(){
	var prevSum;
	
	return {
		calc : function(lhs, rhs){
			prevSum = lhs + rhs;
			return prevSum;
		}
	};
}