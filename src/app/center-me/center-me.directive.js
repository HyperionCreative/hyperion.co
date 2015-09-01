(function () {
  'use strict';

  angular
    .module('app.center-me', [])
    .directive('hypCenterMe', function () {
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'app/center-me/center-me.html',
        transclude: true
      };
    });
})();
