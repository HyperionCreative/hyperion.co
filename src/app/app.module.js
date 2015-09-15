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

      'dibari.angular-ellipsis',
      'monospaced.elastic',
      'ui.router',

      ////////////////////
      // Common modules //
      ////////////////////

      'common.carousel-slider',
      'common.jquery-knob',
      'common.simple-hoverable',

      //////////////////////
      // Specific Modules //
      //////////////////////

      'app.center-me',
      'app.fancy-slider',
      'app.navigation-hamburger',
      'app.on-horizontal-scroll',
      'app.portfolio-header',
      'app.simple-footer',
      'app.simple-header',
      'app.strings',
      'app.view-animations',

      //////////////////////
      // State Components //
      //////////////////////

      'state.state-components'
    ]);
})();
