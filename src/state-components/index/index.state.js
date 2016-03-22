(function () {
  'use strict';
  angular
    .module('state.state-components')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.index', {
          data: {
            page: {
              title: 'Hyperion - Design Consulting Firm in Birmingham, UK',
              description: 'A design consulting firm specialising in UI/UX, Web Design and Development',
              keywords: 'graphic design birmingham, web design studio birmingham, design consulting firm birmingham, web design birmingham, website design birmingham, design studio birmingham, birmingham development, digital studio birmingham, digital studio birmingham, web development birmingham, digital studio, design consulting firm'
            }
          },
          url: '/',
          views: {
            'page-content@': {
              templateUrl: 'state-components/index/index.html'
            }
          }
        });
    }]);
})();
