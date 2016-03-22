(function () {
  'use strict';
  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.webfaction', {
          data: {
            page: {
              title: 'Webfaction - Hyperion',
              description: 'Webfaction is our hosting provider and we worked with them in late 2015 to create a simpler, more intuitive control panel for their platform.',
              keywords: 'hyperion, hyperion creative, webfaction, hosting, host, interface, dashboard, front end, angular, angular js, design, clean'
            }
          },
          url: '/webfaction',
          views: {
            'portfolio-page': {
              templateUrl: 'state-components-mobile/portfolio/webfaction/webfaction.html'
            }
          }
        });
    }]);
})();
