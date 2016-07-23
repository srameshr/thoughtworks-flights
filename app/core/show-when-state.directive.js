(function() {
  "use strict";
  angular
    .module("app.core")
    .directive("dontShowWhen", dontShowWhen);

  function dontShowWhen($window,$state,$rootScope) {
    return {
      restrict: 'A',
      link: function($scope, $element, $attr) {

        function checkExpose(){
          var currentState = $state.current.name;
          var currentSize = $window.innerWidth;

          var statesToMatch = $attr.dontShowWhen.split("&&")[0];
          var factor = $attr.dontShowWhen.split("&&")[1];


          if(statesToMatch.indexOf(currentState) > -1){

            if(currentSize >= 768 || factor.indexOf("phone") < 0) {
               $element.removeClass('ng-hide');
            }
            if(currentSize < 768 && factor.indexOf("phone") > -1) {
               $element.addClass('ng-hide');
            }
          } else {
               $element.removeClass('ng-hide');
          }
        }

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
          checkExpose();
        })
        $window.onresize = function() {
          checkExpose();
        };

        checkExpose();
      }
    };
  }
})();
