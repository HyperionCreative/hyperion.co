(function () {
  'use strict';

  angular
    .module('common.simple-page-title', [])
    .directive('hypSimplePageTitle', ['$rootScope', function ($rootScope) {
      var updateTitleFn = angular.noop;

      $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        if (angular.isDefined(toState.data) && angular.isString(toState.data.pageTitle)) {
          updateTitleFn(toState.data.pageTitle);
        }
      });

      return {
        link: function (scope, iElement) {
          updateTitleFn = function (pageTitle) {
            iElement.text(pageTitle);
          };
        },
        restrict: 'A'
      };
    }]);
})();
