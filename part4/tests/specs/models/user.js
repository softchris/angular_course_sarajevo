
describe('given a user ', function(){
	
	var User;
	
	//load module
	beforeEach(module('models'));
	
	//load definition
	beforeEach(inject(function(_User_) {
		User = _User_;
	}));
	
	it('verify that parsing works', function(){
		var input = { name : "Zlatan", address : "ParisSG" };
		var user = new User(input);
		
		expect(user.name).toBe('Zlatan');
		expect(user.address).toBe('ParisSG');
	});
})