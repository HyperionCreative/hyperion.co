(function () {
  'use strict';

  angular
    .module('state.sub-page-template', [])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('root.sub-page-template', {
          abstract: true,
          views: {
            'page-content@': {
              controller: ['$rootScope', '$scope', function ($rootScope, $scope) {
                // Don't forget to change navigation-hamburger.html after you modify the items' order!
                var navigationStates = [
                  'root.sub-page-template.expertise',
                  'root.sub-page-template.our-processes',
                  'root.sub-page-template.portfolio',
                  'root.sub-page-template.contact'
                ];

                $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
                  var toStateIndex = navigationStates.indexOf(toState.name);
                  var fromStateIndex = navigationStates.indexOf(fromState.name);

                  var order = toStateIndex - fromStateIndex;

                  if (order > 0) {
                    $scope.direction = 'right';
                  } else {
                    $scope.direction = 'left';
                  }
                });
              }],
              templateUrl: 'state-components/sub-page-template/sub-page-template.html'
            }
          }
        });
    }]);
})();
