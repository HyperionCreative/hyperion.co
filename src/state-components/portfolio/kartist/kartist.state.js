(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio.kartist', {
          data: {
            page: {
              title: 'Kartist | Hyperion',
              description: 'We worked with Kartist in early 2015 - their platform aims to help shoppers everywhere manage their lists, find inspiration and connect with likeminded people.',
              keywords: 'development, front end, angular, angular js, browser extension, chrome extension, safari extension, experience, performance, back end, API, shopping, shoppers, interface, front end, branding, alicja murphy, mobile, responsive, platform'
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
