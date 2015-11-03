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
            pageTitle: 'Why Hyperion | Hyperion'
          },
          url: '/why-hyperion',
          views: {
            'sub-page-content': {
              templateUrl: 'state-components/justification/justification.html'
            }
          }
        });
    }]);
})();
