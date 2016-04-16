(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.kartist', {
          data: {
            simpleSeo: {
              title: 'Kartist - Hyperion',
              description: 'This is a case study for an interface design project we did for Kartist.',
              keywords: 'front end, angular, angularjs, browser extension, chrome extension, safari extension, experience, performance, back end, API,  hyperion, kartist, shopping, shoppers, platform, interface, front end, branding, alicja murphy, mobile, responsive'
            }
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
