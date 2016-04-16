(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio.kartist', {
          data: {
            simpleSeo: {
              title: 'Kartist - Hyperion',
              description: 'This is a case study for an interface design project we did for Kartist.',
              keywords: 'front end, angular, angularjs, browser extension, chrome extension, safari extension, experience, performance, back end, API,  hyperion, kartist, shopping, shoppers, platform, interface, front end, branding, alicja murphy, mobile, responsive'
            }
          },
          url: '/kartist',
          views: {
            'sub-page-content@root.sub-page-template': {
              templateUrl: 'state-components/portfolio/kartist/kartist.html'
            }
          }
        });
    }]);
})();
