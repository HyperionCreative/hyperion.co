(function () {
  'use strict';

  angular
    .module('state.contact')
    .controller('ContactCtrl', ['$scope', function ($scope) {
      $scope.onSubmit = function (dataToSubmit) {
        console.log(dataToSubmit);
      };
    }]);
})();
