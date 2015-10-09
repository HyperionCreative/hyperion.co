(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.quizkick', {
          data: {
            pageTitle: 'QuizKick | Hyperion'
          },
          url: '/quizkick',
          views: {
            'portfolio-page': {
              templateUrl: 'state-components-mobile/portfolio/quizkick/quizkick.html'
            }
          }
        });
    }]);
})();
