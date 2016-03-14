(function () {
  'use strict';
  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio.grow', {
          data: {
            page: {
              title: 'Grow with a CFO | Hyperion',
              description: 'We worked with Grow with a CFO in 2015 to help them design their website and more easily showcase their services and processes.',
              keywords: 'grow with a cfo, grow, financial, financial consulting, services, website, site, web design, responsive, code, html, css'
            }
          },
          url: '/grow',
          views: {
            'sub-page-content@root.sub-page-template': {
              templateUrl: 'state-components/portfolio/grow/grow.html'
            }
          }
        });
    }]);
})();
