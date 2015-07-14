(function () {
  'use strict';

  angular
    .module('app.simple-footer', [])
    .directive('hypSimpleFooter', function () {
      return {
        replace: true,
        restrict: 'E',
        templateUrl: 'app/simple-footer/simple-footer.html'
      };
    });
})();
