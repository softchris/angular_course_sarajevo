describe('given a UserController', function(){
	
	var UserController,
		$scope,
		ctrl,
		$httpMock;
	
	//load modules
	beforeEach(module('models'));
	beforeEach(module('services'));
	beforeEach(module('controllers'));
	
	//load definition
	beforeEach(inject(function($controller, $rootScope, $httpBackend) {
		$httpMock = $httpBackend;
		$httpMock.expectGET('/users/1').respond({ name : 'Zlatan' });
		$scope = $rootScope.$new();
		ctrl = $controller('userController', { $scope: $scope });
	}));
	
	it('verify I can get a user', function(){
		$scope.load();
		$httpMock.flush();
		
		expect($scope.user.name).toBe('Zlatan');
	});
})