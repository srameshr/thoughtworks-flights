(function() {
    'use strict';

    angular
        .module('app.flights')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app.flights',
                config: {
                  url: '/flights/:origin/:destination/:departure/:arrival/:seats',
                  templateUrl: 'app/flights/templates/flights-list.html',
                  title: 'Flights',
                  controller: 'FlightsCtrl as vm',
                  resolve: {
                    flightsData: function($stateParams, flightsService, path) {
                      return flightsService.search(path, $stateParams);
                    }
                  }
                }
            }
        ];
    }
})();
