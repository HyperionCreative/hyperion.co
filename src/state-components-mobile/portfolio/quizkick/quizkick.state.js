(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.quizkick', {
          data: {
            simpleSeoTitle: 'QuizKick - Hyperion',
            simpleSeoDescription: 'Find more details about the interface we designed for QuizKick.',
            simpleSeoKeywords: 'hyperion, quizkick, football, quiz, game, design, interface, back-end, development, motion'
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
