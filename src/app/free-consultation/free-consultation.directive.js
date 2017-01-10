(function () {
  'use strict';

  function getCookie() {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + 'FREE_CONSULTATION_HIDE' + '=');

    if (parts.length === 2) {
      return parts.pop().split(';').shift() === '1';
    }
  }

  function setCookie() {
    var d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + d.toUTCString();
    document.cookie = 'FREE_CONSULTATION_HIDE=1;' + expires + ';path=/';
  }

  angular
    .module('app.free-consultation', [])
    .directive('hypFreeConsultation', ['$rootScope', '$state', 'Debounce', function ($rootScope, $state, Debounce) {
      return {
        bindToController: true,
        controller: ['$element', function ($element) {
          var vm = this;

          ///////////////
          // Variables //
          ///////////////
          vm.alwaysHide = getCookie();
          vm.showConsultationPopup = false;

          ///////////////
          // Functions //
          ///////////////
          vm.noThanks = function () {
            /*@@@ window.ga('send', 'event', 'Free Consultation', 'No Thanks'); @@@*/
            setCookie();
            vm.alwaysHide = true;
          };

          vm.soundsGood = function () {
            /*@@@ window.ga('send', 'event', 'Free Consultation', 'Sounds Good'); @@@*/
            $element.hide();
            setCookie();
            vm.alwaysHide = true;
            setTimeout(function () {
              window.open('https://www.hyperion.co/ask/consultation');
            }, 30);
          };

          ///////////////
          // Run block //
          ///////////////
          var tryToShowOnContact = new Debounce(function () {
            if ($state.current.name === 'root.sub-page-template.contact') {
              $rootScope.$evalAsync(function () {
                vm.showConsultationPopup = true;
                /*@@@ window.ga('send', 'event', 'Free Consultation', 'Is displayed'); @@@*/
              });
            }
          }, 5000);
          var tryToShowOnPortfolio = new Debounce(function () {
            if ($state.current.name.match('root.sub-page-template.portfolio')) {
              $rootScope.$evalAsync(function () {
                vm.showConsultationPopup = true;
                /*@@@ window.ga('send', 'event', 'Free Consultation', 'Is displayed'); @@@*/
              });
            }
          }, 10000);

          if (!vm.alwaysHide) {
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
          }
        }],
        controllerAs: 'vm',
        replace: true,
        restrict: 'E',
        scope: {},
        templateUrl: 'app/free-consultation/free-consultation.html'
      };
    }]);
})();
