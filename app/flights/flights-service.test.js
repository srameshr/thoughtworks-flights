describe('Flights Data Service', function(){
    var Flights;
    beforeEach(module('app.flights'));

    beforeEach(inject(function (_Flights_) {
        Flights = _Flights_.data;
    }));

    it('can get an instance of Object', inject(function(Flights) {
        expect(Flights).toBeDefined();
    }));

    it('has > 5 flights', inject(function(Friends) {
        expect(Friends.all().length).toBeGreaterThan(5);
    }));

});
