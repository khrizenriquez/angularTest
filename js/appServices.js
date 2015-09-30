'use strict';

var PuchamonService = angular.module('PuchamonService', []);

PuchamonService.factory('PuchamonData', function ($http) {
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
});

PuchamonService.factory("PuchamonDetail", function ($http) {
	var obj = {};

    obj.puchamonDetail = function (puchamonNumber) {
    	var pokeUrl = 'http://pokeapi.co/api/v1/pokemon/';

    	return $http.get(pokeUrl + parseInt(puchamonNumber));
    }

    obj.returnToListView = function () {};

 	return obj;
});
