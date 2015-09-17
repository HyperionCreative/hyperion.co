(function () {
  'use strict';

  angular
    .module('state.contact')
    .controller('ContactCtrl', ['$http', '$rootScope', '$scope', function ($http, $rootScope, $scope) {
      var userLocation;

      $http({
        method: 'GET',
        url: 'http://ip-api.com/json'
      }).then(function (response) {
        userLocation = {
          city: response.data.city,
          country: response.data.country
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
