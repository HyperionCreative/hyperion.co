(function () {
  'use strict';

  angular
    .module('app.free-consultation', [])
    .directive('hypFreeConsultation', ['$rootScope', '$state', 'Debounce', function ($rootScope, $state, Debounce) {
      return {
        bindToController: true,
        controller: function () {
          var vm = this;

          ///////////////
          // Variables //
          ///////////////
          vm.alwaysHide = !!localStorage.alwaysHide;
          vm.showConsultationPopup = false;

          ///////////////
          // Functions //
          ///////////////
          vm.noThanks = function () {
            localStorage.setItem('alwaysHide', 'true');
            vm.alwaysHide = true;
          };

          vm.soundsGood = function () {
            localStorage.setItem('alwaysHide', 'true');
            vm.alwaysHide = true;
          };

          ///////////////
          // Run block //
          ///////////////
          var tryToShowOnContact = new Debounce(function () {
            if ($state.current.name === 'root.sub-page-template.contact') {
              $rootScope.$evalAsync(function () {
                vm.showConsultationPopup = true;
              });
            }
          }, 3000);
          var tryToShowOnPortfolio = new Debounce(function () {
            if ($state.current.name.match('root.sub-page-template.portfolio')) {
              $rootScope.$evalAsync(function () {
                vm.showConsultationPopup = true;
              });
            }
          }, 10000);

          $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
            if (toState.name === 'root.sub-page-template.contact') {
              tryToShowOnContact();
            } else if (toState.name.match('root.sub-page-template.portfolio')) {
              if (fromState.name.match('root.sub-page-template.portfolio')) {
                // No need to restart the portfolio timer!
              } else {
                tryToShowOnPortfolio();
              }
            }
          });
        },
        controllerAs: 'vm',
        replace: true,
        restrict: 'E',
        scope: {},
        templateUrl: 'app/free-consultation/free-consultation.html'
      };
    }]);
})();
