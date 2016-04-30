(function () {
  'use strict';

  angular
    .module('state.team', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('team', {
          abstract: true,
          url: '/team',
          views: {
            '@': {
              templateUrl: 'state-components-mobile/team/team.html'
            }
          }
        })
        .state('team.cosmin', {
          data: {
            simpleSeoTitle: 'Cosmin Ababei - Lead front-end Developer at Hyperion',
            simpleSeoDescription: 'Learn more about Cosmin Ababei, the Lead front-end Developer of Hyperion.',
            simpleSeoKeywords: 'freelance website developer birmingham uk, front end developer birmingham uk, angular developer birmingham uk, web developer birmingham uk'
          },
          url: '/cosmin',
          views: {
            '@': {
              controller: ['$scope', function ($scope) {
                $scope.hideTeamMember = 'cristian';
              }],
              templateUrl: 'state-components-mobile/team/team.html'
            }
          }
        })
        .state('team.cristian', {
          data: {
            simpleSeoTitle: 'Cristian Moisei - UI Designer at Hyperion',
            simpleSeoDescription: 'Learn more about Cristian Moisei, the UI designer and founder of Hyperion.',
            simpleSeoKeywords: 'freelance Interface Designer in Birmingham UK, freelance UI Designer in Birmingham UK, freelance Designer in Birmingham UK, freelance Website Designer in Birmingham UK, Interface Designer in Birmingham UK, UI Designer in Birmingham UK, UI design consultant birmingham uk, website design consultant birmingham uk, Designer in Birmingham UK, Website Designer in Birmingham UK'
          },
          url: '/cristian',
          views: {
            '@': {
              controller: ['$scope', function ($scope) {
                $scope.hideTeamMember = 'cosmin';
              }],
              templateUrl: 'state-components-mobile/team/team.html'
            }
          }
        });
    }]);
})();
