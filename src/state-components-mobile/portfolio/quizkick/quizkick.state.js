(function () {
  'use strict';

  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.quizkick', {
          data: {
            page: {
              title: 'QuizKick | Hyperion',
              description: 'QuizKick tried to create a game that would give football fans around the world a chance to prove their knowledge. We worked on the design and the back end of the system.',
              keywords: 'quizkick, football, quiz, game, design, interface, back-end, development, download, animations, showcase'
            }
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
