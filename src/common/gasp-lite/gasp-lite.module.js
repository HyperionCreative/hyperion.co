(function () {
  'use strict';

  /* jshint ignore:start */

  angular
    .module('common.gasp-lite', [])
    .constant('TweenLite', TweenLite)
    .constant('TweenLiteEasings', {
      Power1: Power1,
      Power2: Power2,
      Power3: Power3,
      Power4: Power4
    });

  /* jshint ignore:end */
})();
