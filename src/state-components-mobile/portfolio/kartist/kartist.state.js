(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.kartist', {
          data: {
            simpleSeoTitle: 'Kartist - Hyperion',
            simpleSeoDescription: 'This is a case study for an interface design project we did for Kartist.',
            simpleSeoKeywords: 'front end, angular, angularjs, browser extension, chrome extension, safari extension, experience, performance, back end, API,  hyperion, kartist, shopping, shoppers, platform, interface, front end, branding, alicja murphy, mobile, responsive'
          },
          url: '/kartist',
          views: {
            'portfolio-page': {
              templateUrl: 'state-components-mobile/portfolio/kartist/kartist.html'
            }
          }
        });
    }]);
})();
