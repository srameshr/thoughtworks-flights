(function() {
  "use strict";
  angular
    .module("app.utility")
    .service("utilityService", utilityService);

  function utilityService($window, $timeout, $rootScope) {
    // Public
    return {
      momentCal: momentCal,
      sliderResize: sliderResize
    };

    function momentCal(data) {
      return data && moment(data).calendar();
    }

    function sliderResize() {

      var searchAside = document.getElementById("search-aside"),
        searchAsideWidth;

      if(searchAside.classList.contains("ng-hide")) {
        searchAsideWidth = 0;
      }
      else {
        searchAsideWidth = searchAside.clientWidth;
      }

      $timeout(function() {
        $rootScope.$broadcast('rzSliderForceRender');
      },500);

      return ($window.innerWidth - searchAsideWidth) + "px";
    }
  }
})();
