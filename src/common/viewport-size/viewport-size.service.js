(function () {
  'use strict';

  // One important thing to remember is that this doesn't trigger a digest cycle.
  // If a registered event listener requires a digest cycle it must trigger it itself.

  angular
    .module('common.viewport-size', [])
    .service('ViewportSize', ['$window', function ($window) {
      this.get = getViewportSize;

      this.onChange = onViewportSizeChange;
      this.offChange = offViewportSizeChange;

      //////////////////////
      // Config variables //
      //////////////////////
      var RESIZE_TIMEOUT = 50;

      ///////////////
      // Variables //
      ///////////////
      var viewportSize = getViewportSize();
      var registeredEventListeners = [];

      ////////////
      // Public //
      ////////////
      function getViewportSize() {
        return {
          height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
          width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        };
      }

      function onViewportSizeChange(fn) {
        if (registeredEventListeners.indexOf(fn) === -1) {
          registeredEventListeners.push(fn);
          fn(viewportSize);
        }
      }

      function offViewportSizeChange(fn) {
        var index = registeredEventListeners.indexOf(fn);

        if (index !== -1) {
          registeredEventListeners.splice(index, 1);
        }
      }

      ///////////////
      // Run block //
      ///////////////
      var resizeTimeout;
      angular.element($window).on('resize', resizeCallback);

      function resizeCallback() {
        clearTimeout(resizeTimeout);
        
        resizeTimeout = setTimeout(function () {
          var partialViewportSize = getViewportSize();

          if (partialViewportSize.width !== viewportSize.width || partialViewportSize.height !== viewportSize.height) {
            viewportSize = partialViewportSize;

            for (var i = 0; i < registeredEventListeners.length; i++) {
              registeredEventListeners[i](viewportSize);
            }
          }
        }, RESIZE_TIMEOUT);
      }
    }]);
})();
