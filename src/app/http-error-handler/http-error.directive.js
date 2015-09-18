(function () {
  'use strict';

  angular
    .module('app.http-error-handler')
    .directive('hypHttpError', function () {
      return {
        replace: true,
        restrict: 'E',
        scope: {
          code: '=',
          message: '=',
          name: '='
        },
        templateUrl: 'app/http-error-handler/http-error.html'
      };
    });
})();
