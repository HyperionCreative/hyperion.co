(function () {
  'use strict';

  angular
    .module('app.fancy-slider.resizer', [
      'common.viewport-size'
    ])
    // This doesn't support deregistering a callback. I haven't added this functionality
    // as we don't need one.
    .service('FancySliderResizer', ['FancyConfiguration', 'ViewportSize', function (Configuration, ViewportSize) {
      this.getProportion = getProportion;
      this.onProportionChange = onProportionChange;

      ///////////////
      // Variables //
      ///////////////
      var
        proportion = computeProportion(),
        registeredCallbacks = [];

      ////////////
      // Public //
      ////////////
      function getProportion() {
        // This way we know for sure we get the latest proportion value!
        return computeProportion();
      }

      // When the callbacks get called they do not trigger a new digest cycle!
      function onProportionChange(callback) {
        registeredCallbacks.push(callback);

        callback(proportion);
      }

      /////////////
      // Private //
      /////////////
      function computeProportion() {
        function _computeProportion(actual, max, min) {
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
          widthProportion = _computeProportion(width, Configuration.MAX_WIDTH, Configuration.MIN_WIDTH),
          heightProportion = _computeProportion(height, Configuration.MAX_HEIGHT, Configuration.MIN_HEIGHT);

        return Math.max(widthProportion, heightProportion);
      }

      function onViewportSizeChange() {
        var possibleProportion = computeProportion();

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
