(function () {
  'use strict';

  var ga = window.ga;

  angular
    .module('common.google-analytics', [])
    .run(['$location', '$rootScope', function ($location, $rootScope) {
      ga('create', 'UA-67881622-1', 'auto');

      $rootScope.$on('$stateChangeSuccess', function () {
        ga('send', 'pageview', {
          page: $location.absUrl()
        });
      });
    }]);
})();
