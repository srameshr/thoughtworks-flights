(function() {
  "use strict";
  angular
    .module("app.flights")
    .controller("FlightsCtrl", FlightsCtrl);

  function FlightsCtrl($stateParams, flightsData, utilityService) {
    var vm = this;

    vm.userQueryData = {
      origin: $stateParams.origin,
      destination: $stateParams.destination,
      departure: moment($stateParams.departure).format("MMM Do YYYY"),
      arrival: $stateParams.arrival && moment($stateParams.arrival).format("MMM Do YYYY")
    }
    vm.flights = flightsData.map(constructCalendarDate);

    // Private, in the sense not exposed to events on view
    function constructCalendarDate(flight) {
      flight.arrival = utilityService.momentCal(flight.arrival);
      flight.departure = utilityService.momentCal(flight.departure);

      if(flight.round_trip) {
        flight.round_trip.arrival = utilityService.momentCal(flight.round_trip.arrival);
        flight.round_trip.departure = utilityService.momentCal(flight.round_trip.departure);
      }

      return flight;
    }

  }
})();
