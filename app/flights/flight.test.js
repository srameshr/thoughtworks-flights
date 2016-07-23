describe('FlightsCtrl', function(){
    var scope, vm;

    // load the controller's module
    beforeEach(module('app.flights'));

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        vm = $controller;
        $controller('FlightsCtrl', {$scope: scope});
    }));

    // Units
    it('should have vm defined', function(){
        expect(vm).toBeDefined();
    });

    it('should have flights data', function() {
        expect(vm.flightsData).toBeDefined();
    });

});
