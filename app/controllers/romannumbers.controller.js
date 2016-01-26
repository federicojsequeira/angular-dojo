var dojo = angular.module('dojoApp',[]);

dojo.controller('RomanNumbersController', function($scope){
	$scope.convertNumberToRoman = function (number) {
		if (number === 1){
			 return 'I';
		}
        else if (number === 2){
			return 'II';
		}
		else if(number === 10){
			return 'X'
		}
		else {
			return 'V';
		}
	}
});