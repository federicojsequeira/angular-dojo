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

}); 

