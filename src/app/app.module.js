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

      'monospaced.elastic',
      'ui.router',

      ////////////////////
      // Common modules //
      ////////////////////

      'common.carousel-slider',
      'common.simple-hoverable',

      //////////////////////
      // Specific Modules //
      //////////////////////

      'app.fancy-slider',
      'app.navigation-hamburger',
      'app.portfolio-header',
      'app.simple-footer',
      'app.simple-header',
      'app.strings',

      //////////////////////
      // State Components //
      //////////////////////

      'state.state-components'
    ]);
})();
