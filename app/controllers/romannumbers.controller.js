var dojo = angular.module('dojoApp',[]);


dojo.controller('RomanNumbersController', function($scope){

	$scope.convertNumberToRoman = function (number) {

		if (number === 1){
			 return 'I';
		}
        else{
			return 'V';
		}
	}

});