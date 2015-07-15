(function () {
  'use strict';

  angular
    .module('app.simple-header', [])
    .directive('hypSimpleHeader', function () {
      return {
        scope: {
          description: '@',
          name: '@'
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/simple-header/simple-header.html'
      };
    });
})();
