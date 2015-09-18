(function () {
  'use strict';

  angular
    .module('state.state-components')
    .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('root', {
          abstract: true,
          views: {
            'preloader': {
              controller: 'PreloaderCtrl',
              templateUrl: 'state-components/preloader/preloader.html'
            },
            'fancy-slider': {
              // controller: 'FancySliderCtrl',
              templateUrl: 'state-components/fancy-slider/fancy-slider.html'
            }
          }
        });

      $urlRouterProvider.otherwise('/');

      /*@@@ $locationProvider.html5Mode(true); @@@*/
    }]);
})();
