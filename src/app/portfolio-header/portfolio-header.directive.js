(function () {
  'use strict';

  angular
    .module('app.portfolio-header', [])
    .directive('hypPortfolioHeader', function () {
      return {
        scope: {
          description: '@',
          clientLogoUrl: '@',
          clientName: '@'
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/portfolio-header/portfolio-header.html'
      };
    });
})();
