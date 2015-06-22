# Lab 3 - directives

The point with this lab is to practice making your own directive

REMINDER

	angular
		.module('app')
		.directive('directive', function(){
			return {
				restrict : 'E',
				replace : true,
				template : '<div>{{scopeProperty}}</div>',
				scope : true,
				controller : function($scope){

				}
			}
		})

## Simple directive
The idea is to clean up a page

	<h1>title></h1>
	<ul class="menu">
		<li>
		 	<a href="#Home">Home</a>
		</li>
		<li>
		 	<a href="#About">About</a>
		</li>
	</ul>

Make a header directive (that encapsulates <h1..)

- do an inline template
- inherit scope from a controller

Make a menu directive
- do an inline template
- inherit scope from a controller


### Result DOM should look like

	<header></header>
	<menu></menu>
## Isolated directive
The idea here is to create a set of notes. Every note should have a title and description. Both these should be editable. Notes should bind in author from appController. Author should be indicated at the bottom of the note in italic.

### Result DOM should look like

	<div ng-controller="appController">
		<note author="author" />
		<note author="author" />
		<note author="author" />
		<note author="author" />
	</div>
