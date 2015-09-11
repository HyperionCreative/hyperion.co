(function () {
  'use strict';

  var projectPageDetector = 'root.sub-page-template.portfolio.';
  var goToIndex = false;

  angular
    .module('app.portfolio-header', [])
    .run(['$rootScope', function ($rootScope) {
      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
        if (goToIndex && toState.name.indexOf(projectPageDetector) === 0 && fromState.name.indexOf(projectPageDetector) === 0) {
          // index -> project -> project -> project
          // No need to anything, carry on!
        } else if (!goToIndex && fromState.name === 'root.index' && toState.name.indexOf(projectPageDetector) === 0) {
          // index -> project
          goToIndex = true;
        } else {
          goToIndex = false;
        }
      });
    }])
    .directive('hypPortfolioHeader', function () {
      return {
        link: function (scope) {
          scope.goToIndex = goToIndex;
        },
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
