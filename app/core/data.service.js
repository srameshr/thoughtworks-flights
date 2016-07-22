(function() {
  "use strict";
  angular
    .module("app.core")
    .service("dataService", dataService);

  function dataService($http, domain) {
    // Public exposed methods
    return {
      get: get
    };

    // Definition
    function get(url, params, cache) {
      return $http.get(domain + "" + url , {
        params: params || {},
        cache: cache || false
      });
    }
  }
})();
