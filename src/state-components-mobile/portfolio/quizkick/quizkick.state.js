(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.quizkick', {
          url: '/quizkick',
          views: {
            'portfolio-page': {
              templateUrl: 'state-components-mobile/portfolio/quizkick/quizkick.html'
            }
          }
        });
    }]);
})();
