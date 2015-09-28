(function () {
  'use strict';

  angular
    .module('HyperionMobileApp', [
      //////////////////////////////
      // Official angular modules //
      //////////////////////////////

      'ngSanitize',
      'ngTouch',

      ///////////////////////
      // Third party modules //
      ///////////////////////

      'ui.router',

      ////////////////////
      // Common modules //
      ////////////////////

      'common.greeter',
      'common.full-width-slider',
      'common.ua-parser',

      //////////////////////
      // Specific Modules //
      //////////////////////

      'app.simple-footer',
      'app.strings',

      //////////////////////
      // State Components //
      //////////////////////

      'state.state-components'
    ])
    .config(['$compileProvider', function ($compileProvider) {
      // I've included "sms" to the whitelist regexp
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|sms|file):/);
    }]);
})();
