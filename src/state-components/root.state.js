(function () {
  'use strict';

  angular
    .module('state.state-components')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('root', {
          abstract: true,
          views: {
            'preloader': {
              controller: 'PreloaderCtrl',
              templateUrl: 'state-components/preloader/preloader.html'
            }
          }
        });

      $urlRouterProvider.otherwise('/');
    }]);
})();
