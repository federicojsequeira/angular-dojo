var dojo = angular.module('dojoApp',[]);

dojo.controller('RomanNumbersController', function($scope){
	$scope.convertNumberToRoman = function (number) {
		var romanSymbols = ['I', 'V', 'X'];
		var result = "";
		
		if(number >= 1 && number < 4)
		{
			for (i = 0; i < number; i++) { 
			    result = result + romanSymbols[0]; 
			}
			return result;
		}
		else if(number === 4){
			return (romanSymbols[0] + romanSymbols[1]);
		}
		else if (number > 5 && number < 9){
			result = 'V';
			for(i = 6; i <= number; i++) {
				result = result + 'I';
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
