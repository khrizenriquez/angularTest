'use strict';

var PuchamonService = angular.module('PuchamonService', []);

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
