/// <reference path="../libs/angular/angular.js" />
/// <reference path="../libs/angular/angular-mocks.js" />
/// <reference path="../controllers/romannumbers.controller.js" /> 



describe("Roman Nummers controller", function() {
	var scope;

	beforeEach(function() {
		module('dojoApp');
	      
	    inject(function ($controller, $rootScope) {
	        scope = $rootScope.$new();
	        $controller('RomanNumbersController', {
	            $scope: scope
	        });
	    });
	}); 

    it("Should return I for the number 1", function() {
	   expect(scope.convertNumberToRoman(1)).toBe('I');
	});

	it("Should return II for the number 2", function() {
	   expect(scope.convertNumberToRoman(2)).toBe('II');
	});

	it("Should return III for the number 3", function() {
	   expect(scope.convertNumberToRoman(3)).toBe('III');
	});
	
	it("Should return IV for the number 4", function() {
	   expect(scope.convertNumberToRoman(4)).toBe('IV');
	});

	it("Should return V for the number 5", function() {
	   expect(scope.convertNumberToRoman(5)).toBe('V');
	});

	it("Should return VI for the number 6", function() {
	   expect(scope.convertNumberToRoman(6)).toBe('VI');
	});

	it("Should return VII for the number 7", function() {
	   expect(scope.convertNumberToRoman(7)).toBe('VII');
	});

	it("Should return VIII for the number 8", function() {
	   expect(scope.convertNumberToRoman(8)).toBe('VIII');
	});

	it("Should return IX for the number 9", function() {
	   expect(scope.convertNumberToRoman(9)).toBe('IX');
	});

	it("Should return X for the number 10", function() {
	   expect(scope.convertNumberToRoman(10)).toBe('X');
	});

	it("Should return XI for the number 11", function() {
	   expect(scope.convertNumberToRoman(11)).toBe('XI');
	});
	
	it("Should return XII for the number 12", function() {
	   expect(scope.convertNumberToRoman(12)).toBe('XII');
	});
	
	it("Should return XIII for the number 13", function() {
	   expect(scope.convertNumberToRoman(13)).toBe('XIII');
	});
	
	it("Should return XIV for the number 14", function() {
	   expect(scope.convertNumberToRoman(14)).toBe('XIV');
	});
	
	it("Should return XV for the number 15", function() {
	   expect(scope.convertNumberToRoman(15)).toBe('XV');
	});
	
	it("Should return XVI for the number 16", function() {
	   expect(scope.convertNumberToRoman(16)).toBe('XVI');
	});
	
	it("Should return XX for the number 20", function() {
	   expect(scope.convertNumberToRoman(20)).toBe('XX');
	});
	
	it("Should return XXI for the number 21", function() {
	 expect(scope.convertNumberToRoman(21)).toBe('XXI');
	});
	
	it("Should return XXXVII for the number 37", function() {
	 expect(scope.convertNumberToRoman(37)).toBe('XXXVII');
	});
	
	
}); 

