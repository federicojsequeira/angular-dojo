var dojo = angular.module('dojoApp',[]);

dojo.controller('RomanNumbersController', function($scope){
	$scope.convertNumberToRoman = function (number) {
		var romanSymbols = ['I', 'V', 'X'];

		if(number >= 1 && number < 4)
		{
			var result = "";
			for (i = 0; i < number; i++) { 
			    result = result + romanSymbols[0]; 
			}
			return result;
		}
		else if(number === 10){
			return 'X'
		}
		else {
			return 'V';
		}
	}
}); 
