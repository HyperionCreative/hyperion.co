(function () {
  'use strict';
  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.portfolio.quizkick', {
          data: {
            simpleSeoTitle: 'QuizKick - Hyperion',
            simpleSeoDescription: 'Find more details about the interface we designed for QuizKick.',
            simpleSeoKeywords: 'hyperion, quizkick, football, quiz, game, design, interface, back-end, development, motion'
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
