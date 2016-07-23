(function() {
  "use strict";
  angular
    .module("app.utility")
    .service("utilityService", utilityService);

  function utilityService() {
    // Public
    return {
      momentCal: momentCal
    };

    function momentCal(data) {
      return data && moment(data).calendar();
    }
  }
})();
