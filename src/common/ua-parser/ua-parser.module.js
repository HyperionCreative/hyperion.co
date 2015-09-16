(function () {
  'use strict';

  /* jshint ignore:start */

  var parser = new UAParser();
  var PARSED_UA = parser.getResult();

  angular
    .module('common.ua-parser', [])
    .constant('PARSED_UA', PARSED_UA);

  /* jshint ignore:end */
})();
