(function () {
  'use strict';
  angular
    .module('state.our-processes', [
      'state.sub-page-template'
    ])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template.our-processes', {
          data: {
            pageTitle: 'Our Processes | Hyperion'
          },
          url: '/our-processes',
          views: {
            'sub-page-content': {
              templateUrl: 'state-components/our-processes/our-processes.html'
            }
          }
        });
    }]);
})();
