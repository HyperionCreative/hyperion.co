(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio.kartist', {
          data: {
            pageTitle: 'Kartist | Hyperion'
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
