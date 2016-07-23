(function() {
  "use strict";
  angular
    .module("app.flights")
    .service("flightsService", flightsService);

  function flightsService($q, dataService) {
    return {
      search: search
    };

    function search(url, searchParams) {
      return dataService.get(url).then(function(flights) {
        return flights.data
        .filter(filterArrivalFlights.bind(searchParams))
        .filter(filterCityMatch.bind(searchParams));
      }).catch(function(error) {
        return error;
      });
    }

    // Private, should be done by the server though. (Part of requirement to do it on the front end)
    //  Simple filter on arrival date
    // Coud be extend similary to match date. // TODO

    function filterCityMatch(data) {
      if(this.origin && this.destination) {
        if(this.origin.toLowerCase() === data.from_name.toLowerCase() &&
          this.destination.toLowerCase() === data.to_name.toLowerCase()) {
          return data;
        }
      }
    }

    function filterArrivalFlights(data) {
      if(this.arrival) {
        if(data.round_trip) {
          return data;
        }
      }
      else {
        return data;
      }
    }
  }
})();
