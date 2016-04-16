(function () {
  'use strict';
  angular
    .module('state.state-components')
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.index', {
          data: {
            simpleSeo: {
              title: 'Hyperion - Design Consulting Firm in Birmingham, UK',
              description: 'A Birmingham based design consulting firm specialising in UI/UX, Web Design and Development',
              keywords: 'interface design agency birmingham uk, ui design agency birmingham uk, website design agency birmingham uk, design agency birmingham uk, interface design studio birmingham uk, ui design studio birmingham uk, design studio birmingham uk, interface design firm birmingham uk, design firm birmingham uk, website design firm birmingham uk, ui consulting firm birmingham uk, website design consulting firm birmingham uk, design consulting firm birmingham uk, website design team birmingham uk, startup ui design birmingham uk, startup website design birmingham uk, web design studio birmingham, design consulting firm birmingham, web design birmingham, website design birmingham, design studio birmingham, web development birmingham, design consulting firm, design agency birmingham, birmingham web design agency'
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
