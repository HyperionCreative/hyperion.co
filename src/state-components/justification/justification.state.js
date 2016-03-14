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
            page: {
              title: 'Justification | Hyperion',
              description: 'Here are some of the reasons our clients have chosen us in the past, and why we believe you should do the same.',
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
