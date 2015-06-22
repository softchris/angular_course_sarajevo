angular
	.module('app')
	.factory('SomeFactoryModel',SomeFactoryModel );

function SomeFactoryModel(){
	function User(dto){
		this.name = dto.name;
		this.address = dto.address;
		this.email = dto.email;	
	}
	
	return User;	
}	
