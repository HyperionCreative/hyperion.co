(function () {
  'use strict';

  angular
    .module('app.contact-form', [])
    .directive('hypContactForm', function () {
      return {
        link: function (scope) {
          scope.isSubmitted = false;
          scope.tryToSubmit = tryToSubmit;

          ///////////////
          // Functions //
          ///////////////
          function tryToSubmit(dataToSubmit, formCtrl) {
            if (formCtrl.$valid) {
              scope.isSubmitted = true;

              scope.onSubmit({
                data: dataToSubmit
              });
            }
          }
        },
        replace: true,
        restrict: 'E',
        scope: {
          onSubmit: '&'
        },
        templateUrl: 'app/contact-form/contact-form.html'
      };
    });
})();
