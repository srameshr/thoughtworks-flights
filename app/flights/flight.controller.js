(function() {
  "use strict";
  angular
    .module("app.flights")
    .controller("FlightsCtrl", FlightsCtrl);

  function FlightsCtrl($stateParams, flightsData) {
    var vm = this;
    vm.userQueryData = {
      origin: $stateParams.origin,
      destination: $stateParams.destination,
      departure: $stateParams.departure,
      arrival: $stateParams.arrival
    }
    vm.flights = flightsData;
  }
})();
