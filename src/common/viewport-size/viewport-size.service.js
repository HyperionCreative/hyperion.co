(function () {
  'use strict';

  // One important thing to remember is that this doesn't trigger a digest cycle.
  // If a registered event listener requires a digest cycle it must trigger it itself.

  angular
    .module('common.viewport-size', [
      'common.debounce'
    ])
    .service('ViewportSize', ['$window', 'Debounce', function ($window, Debounce) {
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

      function onViewportSizeChange(fn, lateExec) {
        if (registeredEventListeners.indexOf(fn) === -1) {
          registeredEventListeners.push(fn);

          if (lateExec === true) {
            // Don't do anything
          } else {
            fn(viewportSize);
          }
        }
      }

      function offViewportSizeChange(fn) {
        var index = registeredEventListeners.indexOf(fn);

        if (index !== -1) {
          registeredEventListeners[index] = angular.noop;
        }
      }

      ///////////////
      // Run block //
      ///////////////
      var resizeCallback = new Debounce(function () {
        var partialViewportSize = getViewportSize();

        if (partialViewportSize.width !== viewportSize.width || partialViewportSize.height !== viewportSize.height) {
          viewportSize = partialViewportSize;

          angular.forEach(registeredEventListeners, function (registeredEventListener) {
            registeredEventListener(viewportSize);
          });
        }
      }, RESIZE_TIMEOUT);
      angular.element($window).on('resize', resizeCallback);
    }]);
})();
