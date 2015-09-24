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

      //////////////////////
      // State Components //
      //////////////////////

      'state.state-components'
    ]);
})();
