(function() {
  "use strict";
  angular
    .module("app.flights")
    .service("flightsService", flightsService);

  function flightsService(dataService, $q) {
    return {
      search: search
    };

    // Private
    function searchFilter(criteria, data) {

    }
    function search(url, searchParams) {
      return dataService.get(url).then(function(flights) {
        return flights.data;
      }).catch(function(error) {
        return error;
      });
    }
  }
})();
