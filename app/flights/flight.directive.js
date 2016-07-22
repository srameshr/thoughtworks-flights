(function() {
  "use strict";
  angular
    .module("app.flights")
    .directive("flight", flight);

  function flight() {
    return {
      restrict: 'E',
      templateUrl: 'app/flights/templates/flight.html',
      scope: {
        flights: '='
      },
      link: function(scope,ele,attrs) {
        scope.priceRange = function(flight) {
          if(scope.filterPrice === undefined) { // Scope not yet ready! DUH angular
            return true;
          }
          else {
            return ((flight['price'] >= scope.filterPrice) && (flight['price'] <= 10000))
          }
        }
      }
    }
  }
})();
