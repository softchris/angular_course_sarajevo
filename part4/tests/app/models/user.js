angular
	.module('models')
	.factory('User', function(){
		function User(dto){
			this.name = dto.name;
			this.address = dto.address;
		}	
		
		return User;
	});

