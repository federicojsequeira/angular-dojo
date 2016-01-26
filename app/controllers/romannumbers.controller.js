var dojo = angular.module('dojoApp',[]);

dojo.controller('RomanNumbersController', function($scope){
	$scope.convertNumberToRoman = function (number) {
		var result = "";
		
		if(number >= 5 && number < 9)
		{
			result="V";
			number = number-5;
		}

		if (number >= 1 && number < 4) 
		{
			for (i = 0; i < number; i++) { 
			    result = result + "I"; 
			}
			return result;
		}		
		else if(number === 4){
			return ("I" + "V");
		}		
		else if(number === 9){
			return ("I" + "X");
		}
		else if(number === 10){
			return 'X'
		}		

		return result;
	}
});
