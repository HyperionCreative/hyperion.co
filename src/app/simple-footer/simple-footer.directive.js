(function () {
  'use strict';

  angular
    .module('app.simple-footer', [])
    .directive('hypSimpleFooter', ['$rootScope', function ($rootScope) {
      return {
        link: function (scope) {
          // As we're in a prive scope, we need to copy the "Strings" defined
          // in the $rootScope.
          scope.str = $rootScope.str;

          scope.customFooterText = false;
          if (angular.isString(scope.footerText) && scope.footerText.length > 0) {
            scope.customFooterText = true;
          }
        },
        replace: true,
        restrict: 'E',
        scope: {
          footerText: '=?'
        },
        templateUrl: 'app/simple-footer/simple-footer.html'
      };
    }]);
})();
