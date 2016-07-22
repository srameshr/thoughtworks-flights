(function() {
    'use strict';

    angular
        .module('app.splash')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        var otherwise = '/app/splash';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
              state: 'app.splash',
              config: {
                url: '/splash',
                templateUrl: '/app/splash/templates/splash.html',
                title: 'Search Flights'
              }
            }
        ];
    }
})();
