(function() {
  "use strict";
  angular
    .module("app.search")
    .directive("searchFlight", searchFlight);

  function searchFlight($state) {
    return {
      restrict: 'E',
      templateUrl: 'app/search/templates/search.html',
      scope: {
        showReturn: '='
      },
      link: function(scope, ele, attrs) {
        scope.searchFlights = function(search, validity) {
          if(validity === true) {
            $state.transitionTo("app.flights",  {
              "origin":search.origin,
              "destination": search.destination,
              "departure": search.departure,
              "arrival": search.arrival,
              "seats": search.seats
            }, {
              reload: true, inherit: false, notify: true
            });
          }
        }
      }
    }
  }
})();
