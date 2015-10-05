(function () {
  'use strict';

  angular
    .module('state.state-components')
    .config(['$locationProvider', '$urlRouterProvider', function ($locationProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      /*@@@ $locationProvider.html5Mode(true); @@@*/
    }])
    // Forgive me God for I'm a sinner!
    .run(['$rootScope', '$window', function ($rootScope, $window) {
      $rootScope.isOnLargeScreen = isOnLargeScreen();

      angular.element($window).on('resize', function () {
        var tempIsOnLargeScreen = isOnLargeScreen();

        if ($rootScope.isOnLargeScreen !== tempIsOnLargeScreen) {
          $rootScope.$evalAsync(function () {
            $rootScope.isOnLargeScreen = tempIsOnLargeScreen;
          });
        }
      });

      function isOnLargeScreen() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >= 768;
      }
    }]);
})();
