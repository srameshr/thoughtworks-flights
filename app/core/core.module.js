(function() {
  "use strict";
  angular
    .module("app.core", [
      'ngAnimate',
      'ngSanitize',
      'ngMessages',
      /* Cross-app modules */
      // 'blocks.diagnostics',
      // 'blocks.exception',
      // 'blocks.logger',
      'blocks.router',
      /* 3rd-party modules */
      'ui.router',
    ]);
})();
