(function () {
  'use strict';
  angular
    .module('state.justification', [
      'state.sub-page-template'
    ])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.justification', {
          data: {
            simpleSeoTitle: 'Why work with us - Hyperion',
            simpleSeoDescription: 'We believe our expertise, experience and ideas can help make any project a successful one.',
            simpleSeoKeywords: 'design process, development process, software development process, process, product design, redesign, consultation'
          },
          url: '/why-us',
          views: {
            'sub-page-content': {
              templateUrl: 'state-components/justification/justification.html'
            }
          }
        });
    }]);
})();
