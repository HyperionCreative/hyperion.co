(function () {
  'use strict';

  angular
    .module('app.navigation-hamburger', [
      'common.simple-hoverable'
    ])
    .directive('hypNavigationHamburger', function () {
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'app/navigation-hamburger/navigation-hamburger.html'
      };
    });
})();
