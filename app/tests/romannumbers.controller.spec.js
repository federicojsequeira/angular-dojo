/// <reference path="../libs/angular/angular.js" />
/// <reference path="../libs/angular/angular-mocks.js" />
/// <reference path="../controllers/romannumbers.controller.js" /> 



describe("Roman Nummers controller", function() {
	var scope;

	beforeEach(function() {
		module('dojoApp');
	      
	    inject(function ($controller, $rootScope) {
	        scope = $rootScope.$new();
	        $controller('romanNumbersController', {
	            $scope: scope
	        });
	    });
	}); 

    it("Should return I for the number 1", function() {

	   expect(scope.convertNumberToRoman(1)).toBe('I');
	});
});