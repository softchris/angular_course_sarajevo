describe('given a calculator', function(){
	
	var Calculator;
	
	//load module
	beforeEach(module('services'));
	
	//load definition
	beforeEach(inject(function(_Calculator_) {
		Calculator = _Calculator_;
	}));
	
	it('verify that addition works', function(){
		expect(Calculator.add(1,1)).toBe(2);
	});
	
	it('verify that subtraction works', function(){
		expect(Calculator.sub(1,1)).toBe(0);
	});
	
	it('verify that subtraction works II', function(){
		expect(Calculator.sub(7,1)).toBe(6);
	});
})