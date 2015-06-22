describe('given a mathService', function(){	
	var Service;
	
	beforeEach(module('services'));
	
	beforeEach(function(){
		module(function($provide){
			$provide.factory('Calculator', function (){
				return {
					add : function(){
						return 1+1;
					}
				};
			});
			
		});
	});
	
	//load definition
	beforeEach(inject(function(_mathService_) {
		Service = _mathService_;
	}));
	
	it('verify that mathService add works', function(){
		expect(Service.add(2,2)).toBe(4);
	})
	
})