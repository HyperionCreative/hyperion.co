(function () {
  'use strict';

  angular
    .module('state.contact')
    .controller('ContactCtrl', ['$http', '$rootScope', '$scope', function ($http, $rootScope, $scope) {
      var userLocation;

      $http({
        method: 'GET',
        url: 'https://freegeoip.net/json/'
      }).then(function (response) {
        userLocation = {
          city: response.data.city,
          country: response.data.country_name
        };
      });

      $scope.onSubmit = function (dataToSubmit) {
        $http.post('./php/email-sender.php', {
          formData: dataToSubmit,
          navigationHistory: $rootScope.navigationHistory,
          userLocation: userLocation
        });
      };
    }]);
})();
