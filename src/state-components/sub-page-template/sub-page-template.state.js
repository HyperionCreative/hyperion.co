(function () {
  'use strict';

  angular
    .module('state.sub-page-template', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template', {
          abstract: true,
          views: {
            'page-content@': {
              controller: ['$scope', '$state', function ($scope, $state) {
                // I was to lazy to implement this the "software architecture friendly" way.
                // Sorry future me...
                $scope.closeSubPage = function (event) {
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
              }],
              templateUrl: 'state-components/sub-page-template/sub-page-template.html'
            }
          }
        });
    }]);
})();
