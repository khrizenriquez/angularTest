/*
*Author     @khrizenriquez
*Course:    https://www.udemy.com/quickstart-angularjs/learn/#/
*Extra links: [{
	link: 'http://pokeapi.co/', 
	Example: 'http://pokeapi.co/api/v1/pokemon/150 (shows mewtwo info)'
	}, {	
	link: 'https://gist.github.com/shri/9754992', 
	Example: ''
}] 
*/
'use strict';

var myApp 			= angular.module('myApp', ['ngRoute', 'PuchamonService']);
var pokeUrl 		= 'http://pokeapi.co/api/v1/';

myApp.config(function ($routeProvider) {
	$routeProvider
		.when("/puchamonList", {
			templateUrl: "parts/puchamonsList.html",
			controller: "PuchamonsCtrl"
		})
	.otherwise({
		redirectTo: "/puchamonList"
	});
});

myApp.controller('HeaderCtrl', function($scope) {
	$scope.author = {
		name: 			'Khriz Enríquez',
		github: 		'khrizenriquez',
		appName: 		'Puchamones',
		description: 	'Tienes que atraparlos a todos, son solo 150 + 1'
	};
});

myApp.controller('PuchamonsCtrl', function($scope, PuchamonData) {
	$scope.puchamons;
	PuchamonData.getPuchamons()
		.success(function (resp) {
	       	$scope.puchamons = resp;
	    })
	    .error(function (err) {
	    	console.log(err);
	    	$scope.puchamons = [];
	    });

	$scope.seePuchamon = function (puchamonId) {
		console.log('Puchamon');
	}
});
