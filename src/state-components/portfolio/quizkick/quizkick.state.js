(function () {
  'use strict';
  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio.quizkick', {
          data: {
            pageTitle: 'QuizKick | Hyperion'
          },
          url: '/quizkick',
          views: {
            'sub-page-content@root.sub-page-template': {
              templateUrl: 'state-components/portfolio/quizkick/quizkick.html'
            }
          }
        });
    }]);
})();
