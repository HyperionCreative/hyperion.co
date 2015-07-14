(function () {
  'use strict';

  angular
    .module('app.navigation-hamburger', [
      'common.simple-hoverable'
    ])
    .directive('hypNavigationHamburger', function () {
      return {
        link: function (scope, iElement, iAttrs) {
          iElement.addClass(iAttrs.styleOption || 'left');
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/navigation-hamburger/navigation-hamburger.html'
      };
    });
})();
