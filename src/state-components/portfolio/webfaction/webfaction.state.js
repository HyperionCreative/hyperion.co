(function () {
  'use strict';
  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio.webfaction', {
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
            'sub-page-content@root.sub-page-template': {
              templateUrl: 'state-components/portfolio/webfaction/webfaction.html'
            }
          }
        });
    }]);
})();
