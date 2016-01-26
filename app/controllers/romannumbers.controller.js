var dojo = angular.module('dojoApp',[]);

dojo.controller('RomanNumbersController', function($scope){
	$scope.convertNumberToRoman = function (number) {
<<<<<<< HEAD
		var romanSymbols = ['I', 'V', 'X'];

		if(number >= 1 && number < 4)
		{
			var result = "";
			for (i = 0; i < number; i++) { 
			    result = result + romanSymbols[0]; 
			}
			return result;
		}
=======
		if (number === 1){
			 return 'I';
		}
        else if (number === 2){
			return 'II';
		}
>>>>>>> 7c4839b4c308645a2f234cc15e7d9a3a2b34e3d6
		else if(number === 10){
			return 'X'
		}
		else {
			return 'V';
		}
	}
<<<<<<< HEAD
}); 
=======
});
>>>>>>> 7c4839b4c308645a2f234cc15e7d9a3a2b34e3d6
