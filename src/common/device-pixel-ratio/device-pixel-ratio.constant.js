(function () {
  'use strict';

  angular
    .module('common.device-pixel-ratio', [])
    .constant('DEVICE_PIXEL_RATIO', (function () {
      // https://github.com/tysonmatanich/GetDevicePixelRatio
      var ratio = 1;
      // To account for zoom, change to use deviceXDPI instead of systemXDPI
      if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
        // Only allow for values > 1
        ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
      } else if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
      }
      return ratio;
    })());
})();
