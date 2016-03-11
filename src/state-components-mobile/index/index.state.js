(function () {
  'use strict';
  angular
    .module('state.index', [
      'app.simple-footer'
    ])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('index', {
          data: {
            pageTitle: 'Hyperion | Creative Studio in Birmingham, UK'
          },
          url: '/',
          views: {
            '@': {
              templateUrl: 'state-components-mobile/index/index.html'
            }
          }
        });
    }]);
})();
