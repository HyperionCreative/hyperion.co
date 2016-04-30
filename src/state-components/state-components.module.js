(function () {
  'use strict';

  angular
    .module('state.state-components', [
      'ui.router',

      'state.contact',
      'state.expertise',
      'state.fancy-slider',
      'state.justification',
      'state.portfolio',
      'state.preloader',
      'state.team'
    ]);
})();
