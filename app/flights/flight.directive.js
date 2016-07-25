(function() {
  "use strict";
  angular
    .module("app.flights")
    .directive("flight", flight);

  function flight($timeout, $window, utilityService, $rootScope) {
    return {
      restrict: 'E',
      templateUrl: 'app/flights/templates/flight.html',
      priority:0,
      scope: {
        flights: '='
      },
      link: function(scope,ele,attrs) {
        scope.rangeWidth = utilityService.sliderResize();
        scope.slider = {
          min: 0,
          max: 5000
        };
        scope.priceRange = function(flight) {
          return ((flight['price'] >= scope.slider.min) && (flight['price'] <= scope.slider.max))
        }
      }
    }
  }
})();
