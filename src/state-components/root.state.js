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
            },
            'fancy-slider': {
              templateUrl: 'state-components/fancy-slider/fancy-slider.html'
            }
          }
        });

      $urlRouterProvider.otherwise('/');
    }]);
})();
