(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(configure);

    /* @ngInject */
    function configure ($compileProvider, $logProvider,routerHelperProvider) {

        $compileProvider.debugInfoEnabled(false);

        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        configureStateHelper();

        ////////////////

        function configureStateHelper() {
        }
    }
})();
