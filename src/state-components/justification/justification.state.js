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
            simpleSeo: {
              title: 'Why work with us - Hyperion',
              description: 'We believe our expertise, experience and ideas can help make any project a successful one.',
              keywords: 'design process, development process, software development process, process, product design, redesign, consultation'
            }
          },
          url: '/justification',
          views: {
            'sub-page-content': {
              templateUrl: 'state-components/justification/justification.html'
            }
          }
        });
    }]);
})();
