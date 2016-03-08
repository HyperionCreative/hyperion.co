(function () {
  'use strict';

  angular
    .module('app.browser-targeting', [])
    .run(['$filter', '$document', 'IS_RETINA', 'PARSED_UA', function ($filter, $document, IS_RETINA, PARSED_UA) {
      try {
        var bodyElement = angular.element($document[0].body);

        bodyElement.addClass($filter('lowercase')(PARSED_UA.browser.name));
        bodyElement.addClass($filter('lowercase')(PARSED_UA.os.name));

        if (IS_RETINA) {
          bodyElement.addClass('high-dpi-device');
        }
      } catch (err) {
        // Only God can help the poor user's soul!
      }
    }]);
})();
