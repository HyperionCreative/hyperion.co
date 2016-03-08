(function () {
  'use strict';

  var parser = new window.UAParser();
  var PARSED_UA = parser.getResult();

  angular
    .module('common.ua-parser', [])
    .constant('PARSED_UA', PARSED_UA);
})();
