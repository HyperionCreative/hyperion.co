(function () {
  'use strict';

  angular
    .module('common.viewport-size', [])
    .service('ViewportSize', function () {
      this.get = get;

      function get() {
        return {
          height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
          width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        };
      }
    });
})();
