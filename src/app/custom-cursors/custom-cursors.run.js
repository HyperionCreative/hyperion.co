(function () {
  'use strict';

  angular
    .module('app.custom-cursors', [])
    .run(['$document', '$rootScope', '$state', 'PARSED_UA', function ($document, $rootScope, $state, PARSED_UA) {
      try {
        if (PARSED_UA.browser.name === 'IE' || PARSED_UA.browser.name === 'Edge') {
          angular.element($document[0].body)
            .addClass('custom-cursors-ie-fix');
        }
      } catch (err) {
        // Only God can help the poor user's soul!
      }

      $rootScope.closeSubPage = function (event) {
        var targetElement = angular.element(event.target);

        if (doNotCloseThePage(targetElement)) {
          // Don't do anything as the page is not supposed to be closed!
          return;
        } else {
          // Check the parents to see if we're inside the non closable element

          // This line only works if jQuery is installed!
          var targetParents = targetElement.parents();

          for (var i = 0; i < targetParents.length; i++) {
            if (doNotCloseThePage(angular.element(targetParents[i]))) {
              // Don't close the page since the non closable element is a parent!
              return;
            }
          }
        }

        // If it gets here, then close the page!
        $state.go('root.index');
      };

      function doNotCloseThePage(jqElement) {
        return jqElement.hasClass('custom-cursor') && jqElement.hasClass('normal');
      }
    }]);
})();
