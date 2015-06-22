# Lab 2 - talking to the backend and promises


The idea with this lab is to get comfortable using $http and $q

## Task I - $http

	$http.get('url').then(function(){
	
	});

	$http.post('url',data).then(function(){
	
	});
	
	$http.put('url',data).then(function(){
	
	});

	$http.delete('url').then(function(){
	
	})

- Use $http to get a local json file
- Try use caching
- If you want give shopping cart app from lab I a backend json file

## Task II - $q

Gives us a defer object
	$.defer()

A typical method

	function a(){
		var deferred = $q.defer();
		setTimeout(function(){
			deferred.resolve('some data');
		},4000);
		return deferred.promise;
	}
Call

	a().then(function(result){

	})
	

- Practice with $q
- Practice resolve / reject and error handling
- Create your own methods with $q
- Practice using $q.all and aggregate data from two methods
- Practice hiearchical data calls



