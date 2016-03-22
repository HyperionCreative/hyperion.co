(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.kartist', {
          data: {
            page: {
              title: 'Kartist - Hyperion',
              description: 'We worked with Kartist in early 2015 - their platform aims to help shoppers everywhere manage their lists, find inspiration and connect with likeminded people.',
              keywords: 'development, front end, angular, angular js, browser extension, chrome extension, safari extension, experience, performance, back end, API, shopping, shoppers, interface, front end, branding, alicja murphy, mobile, responsive, platform'
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
