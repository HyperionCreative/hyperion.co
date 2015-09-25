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
      // State Components //
      //////////////////////

      'state.state-components'
    ]);
})();
