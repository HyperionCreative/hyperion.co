(function () {
  'use strict';

  angular
    .module('common.css-vendor-prefixer', [])
    .service('CssVendorPrefixer', function () {
      this.prefixProperty = prefixProperty;

      var VENDOR_PREFIXES = ['-webkit-', '-moz-', '-ms-', '-o-'];

      function prefixProperty(name, value, prefixValue) {
        var toReturn = {};

        // Add all the vendor prefixes
        for (var i = 0; i < VENDOR_PREFIXES.length; i++) {
          toReturn[VENDOR_PREFIXES[i] + name] = (prefixValue === true ? (VENDOR_PREFIXES[i] + value) : (value));
        }

        // Add the clean property
        toReturn[name] = value;

        return toReturn;
      }
    });
})();
