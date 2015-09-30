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

var PuchamonService = angular.module('PuchamonService', []);
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

PuchamonService.factory('PuchamonData', ['$http', function ($http) {
	var obj = {};

    obj.getPuchamons = function () {
    	/*
		Data returns:
			{
				attack: 49
				curve: 1.3
				defense: 49
				evolveLevel: 16
				evolveTo: "2"
				levels: Array[2]
				moves: Array[2]
				name: "Bulbasaur"
				probability: 3
				type: "grass"
			}
		*/
        return $http.get('models/pokemons.json');
    }

    obj.seePuchamon = function(puchamons) {};

 	return obj;
}]);

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
