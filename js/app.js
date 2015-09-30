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

var myApp 	= angular.module('myApp', ['ngRoute']);
var pokeUrl = 'http://pokeapi.co/api/v1/';

myApp.config(function ($routeProvider) {
	$routeProvider
		.when("/puchamonList", {
			templateUrl: "parts/puchamonsList.html",
			controller: "PuchamonsCtrl"
		})
		.when("/puchamonTypes", {
			templateUrl: "parts/puchamonsDetail.html"
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

myApp.controller('PuchamonsCtrl', function ($scope, $http) {
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
	var response = $http.get('models/pokemons.json');
	response.then(function (resp) {
       	$scope.puchamons = resp.data;
    });
    response.error(function (resp) {
    	console.log(resp);
    });

    $scope.seePuchamon = function (puchamon) {
    	console.log(puchamon);
    };
});

myApp.controller('PuchamonsTypeCtrl', function ($scope, $http) {

});
