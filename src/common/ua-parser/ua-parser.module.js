(function () {
  'use strict';

  /* jshint ignore:start */

  var PARSED_UA = detect.parse(navigator.userAgent);

  angular
    .module('common.ua-parser', [])
    .constant('PARSED_UA', PARSED_UA);

  /* jshint ignore:end */
})();
