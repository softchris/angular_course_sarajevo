describe('given a user service', function(){
	
	var UserService;
	
	//load modules
	beforeEach(module('models'));
	beforeEach(module('services'));
	
	//load definition
	beforeEach(inject(function(_userService_) {
		UserService = _userService_;
	}));
	
	it('test parse', function(){
		
	});
})