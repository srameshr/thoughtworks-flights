(function() {
    'use strict';

    angular
        .module('app.layout')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'app',
                abstract: true,
                config: {
                                  abstract: true,
                    url: '/app',
                    templateUrl: '/app/layout/templates/shell.html',
                    title: 'Search Flights'
                }
            }
        ];
    }
})();
