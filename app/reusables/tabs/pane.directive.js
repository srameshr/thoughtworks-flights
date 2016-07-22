(function() {
  "use strict";
  angular
    .module("reusable.tabs")
    .directive('pane', pane);

  function pane() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      templateUrl: 'app/reusables/tabs/templates/pane.html',
      replace: true
    };

  }
})();
