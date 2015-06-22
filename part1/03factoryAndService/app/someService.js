angular
	.module('app')
	.service('someService',SomeService);

function SomeService(){
	var lastSum;
	this.calc = function(rhs, lhs){
		lastSum = lhs + rhs; 
		return lastSum;
	}
}