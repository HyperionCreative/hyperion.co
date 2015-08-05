(function () {
  'use strict';

  angular
    .module('common.retina-images', [])
    .constant('IS_RETINA', (function () {
      function getCookie(name) {
        var value = '; ' + document.cookie;
        var parts = value.split('; ' + name + '=');
        
        if (parts.length === 2) {
          return parts.pop().split(';').shift();
        }
      }

      return getCookie('HTTP_IS_RETINA') === '1';
    })());
})();
