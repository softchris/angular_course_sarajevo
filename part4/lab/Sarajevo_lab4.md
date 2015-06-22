# Lab 4 - Testing
## Installation

	npm install karma -g

	karma init
Just press enter on all questions
*karma.conf.js* should be created

## Run

	karma start <optional config name>
## Setup
In your karma.conf.js there are some things you need to setup

	files : {
		'app/**/*.js'
		'test/**/*.js'
	}

	browsers : [ 'Chrome' ]

Chrome will be started on **karma start**
It can be changed to PhantomJS if you want a browser without UI. 

## Jasmine test syntax

	describe('new suite', function(){
		it('test', function(){
			expect(2).toBe(2) // true
		})
	})
	
## Task I
Create a calculator class with methods

	add
	subtract
- Setup karma.config.js
- Write appropriate tests.

## Task II
Create an angular application
with a

	service
	controller
	model
- Setup karma.config.js
- Write appropriate tests
