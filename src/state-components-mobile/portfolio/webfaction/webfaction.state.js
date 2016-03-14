(function () {
  'use strict';
  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.webfaction', {
          data: {
            page: {
              title: 'Webfaction | Hyperion',
              description: 'Webfaction is our hosting provider and we worked with them in late 2015 to create a simpler, more intuitive control panel for their platform.',
              // TODO add keywords
              keywords: ''
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
