(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resizer', [
      'common.viewport-size'
    ])
    // This doesn't support deregistering a callback. I haven't added this functionality
    // as we don't need one.
    .service('FancySliderResizer', ['MAX_SUPPORTED_WIDTH', 'MAX_SUPPORTED_HEIGHT', 'MIN_SUPPORTED_WIDTH', 'MIN_SUPPORTED_HEIGHT', 'ViewportSize', function (MAX_SUPPORTED_WIDTH, MAX_SUPPORTED_HEIGHT, MIN_SUPPORTED_WIDTH, MIN_SUPPORTED_HEIGHT, ViewportSize) {
      this.onProportionChange = onProportionChange;

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

        var currentResolution = ViewportSize.get();

        var width = currentResolution.width;
        var height = currentResolution.height;

        var
          widthProportion = _getProportion(width, MAX_SUPPORTED_WIDTH, MIN_SUPPORTED_WIDTH),
          heightProportion = _getProportion(height, MAX_SUPPORTED_HEIGHT, MIN_SUPPORTED_HEIGHT);

        return Math.max(widthProportion, heightProportion);
      }

      function onViewportSizeChange() {
        var possibleProportion = getProportion();

        if (possibleProportion !== proportion) {
          proportion = possibleProportion;

          for (var i = 0; i < registeredCallbacks.length; i++) {
            registeredCallbacks[i](proportion);
          }
        }
      }

      ///////////////
      // Run block //
      ///////////////

      ViewportSize.onChange(onViewportSizeChange);
    }]);
})();
