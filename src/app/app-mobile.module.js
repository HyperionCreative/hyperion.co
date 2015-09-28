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

      //////////////////////
      // Specific Modules //
      //////////////////////

      'app.simple-footer',
      'app.strings',

      //////////////////////
      // State Components //
      //////////////////////

      'state.state-components'
    ]);
})();
