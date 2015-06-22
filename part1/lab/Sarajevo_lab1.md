# Lab I - Angular basics

## View directives
**ng-app**
creates an angular app

	<div ng-app></div>
**ng-click**
wires up a click callback on the element
	
	<div ng-click="save()"></div>
**ng-show** determines wether an element shows or not

	<div ng-show="list.length > 0" ></div>
**ng-controller** creates a controller context

	<div ng-controller="controllerName"	></div>

**ng-repeat** loops out items in a list

	<ul>
		<li ng-repeat="item in items">
			{{ $index  item.name}}
		</li>
	</ul>

	0 item 1
	1 item 2
	etc


## Bootstrapping

create a module

	angular.module('app',[]);
get a module

	angular.module('app');

## Concepts
create a controller

	angular
		.module('app',[])
		.controller('appController', function($scope){

		})
create a service

	angular
		.module('app',[])
		.service('service', function(){
			this.name = "test";
		})

create a factory

	angular
		.module('app',[])
		.factory('factory', function(){
			return {
				add : function(){}
			}
		})
routing

	angular
		.module('app',[])
		.config(function($routeProvider){
			$routeProvider('/Home', {
				template : 'feels like home {{title}}',
				controller : function($scope){
					$scope.title = 'a title';
				}
			})
		})

## Task I
Create an angular application that is a todo list

You should be able to add and remove / mark as done
items

index.html

	<div ng-controller="todoController">
		<input type="text" ng-model="newItem" />
		
		<button ng-click="add()">add</button>
		<ul ng-repeat="item in items">
			<li ng-click="setAsDone()">{{item}}</li>
		</ul>
	</div>

	Fill in the rest..

## Task II
Shopping cart

Select from a list of products
Add products to cart

- It would be nice if a product has a price
- Clicking a product should add it to cart
- Clicking a cart item should remove it from cart
- It would be nice cart shows total value