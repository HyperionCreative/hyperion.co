(function () {
  'use strict';
  angular
    .module('state.portfolio')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('portfolio.companyMood', {
          data: {
            simpleSeoTitle: 'Company Mood - Hyperion',
            simpleSeoDescription: 'We worked with Company Mood in late 2016 and gave their website a fresh new look that better explains the advantages of their product to their audience.',
            simpleSeoKeywords: 'hyperion, company mood, mood, tracking, website, design, front end'
          },
          url: '/company-mood',
          views: {
            'portfolio-page': {
              templateUrl: 'state-components-mobile/portfolio/company-mood/company-mood.html'
            }
          }
        });
    }]);
})();
