(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resizer', [])
    // This doesn't support deregistering a callback. I haven't added this functionality
    // as we don't need one.
    .service('FancySliderResizer', ['$window', 'MAX_SUPPORTED_WIDTH', 'MAX_SUPPORTED_HEIGHT', 'MIN_SUPPORTED_WIDTH', 'MIN_SUPPORTED_HEIGHT', function ($window, MAX_SUPPORTED_WIDTH, MAX_SUPPORTED_HEIGHT, MIN_SUPPORTED_WIDTH, MIN_SUPPORTED_HEIGHT) {
      this.onProportionChange = onProportionChange;

      //////////////////////
      // Config variables //
      //////////////////////

      var RESIZE_TIMEOUT = 50;

      ///////////////
      // Variables //
      ///////////////

      var
        proportion = getProportion(),
        registeredCallbacks = [];

      ////////////
      // Public //
      ////////////

      // When the callbacks get called they do not trigger a new digest cycle!
      function onProportionChange(callback) {
        registeredCallbacks.push(callback);

        callback(proportion);
      }

      /////////////
      // Private //
      /////////////

      function getProportion() {
        function _getProportion(actual, max, min) {
          // Normalize the 'actual' param
          if (actual <= min) {
            actual = min;
          }

          return actual / max;
        }

        // Defaults to the viewport's width
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        // Defaults to the viewport's height
        var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        var
          widthProportion = _getProportion(width, MAX_SUPPORTED_WIDTH, MIN_SUPPORTED_WIDTH),
          heightProportion = _getProportion(height, MAX_SUPPORTED_HEIGHT, MIN_SUPPORTED_HEIGHT);

        return Math.max(widthProportion, heightProportion);
      }

      function listenForResize() {
        var resizeTimeout;
        angular.element($window).on('resize', resizeCallback);

        function resizeCallback() {
          clearTimeout(resizeTimeout);
          // No need for $timeout as there's no need to trigger a digest cycle.
          // All the changes are pure visual.
          resizeTimeout = setTimeout(function () {
            var possibleProportion = getProportion();

            if (possibleProportion !== proportion) {
              proportion = possibleProportion;

              for (var i = 0; i < registeredCallbacks.length; i++) {
                registeredCallbacks[i](proportion);
              }
            }
          }, RESIZE_TIMEOUT);
        }
      }

      ///////////////
      // Run block //
      ///////////////

      listenForResize();
    }]);
})();
