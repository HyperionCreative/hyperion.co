(function () {
  'use strict';

  angular
    .module('HyperionApp', [
      //////////////////////////////
      // Official angular modules //
      //////////////////////////////

      'ngAnimate',
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
      'common.preloader',
      'common.simple-hoverable',

      //////////////////////
      // Specific Modules //
      //////////////////////

      'app.fancy-slider',
      'app.navigation-hamburger',
      'app.simple-footer',

      //////////////////////
      // State Components //
      //////////////////////

      'state.state-components'
    ]);
})();
