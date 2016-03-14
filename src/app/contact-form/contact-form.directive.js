(function () {
  'use strict';

  angular
    .module('app.contact-form', [])
    .directive('hypContactForm', ['$window',function ($window) {
      return {
        link: function (scope, iElement) {
          scope.isSubmitted = false;
          scope.tryToSubmit = tryToSubmit;

          ///////////////
          // Run block //
          ///////////////
          function onEnter(event) {
            if (event.keyCode === 13 && (event.target && event.target.tagName && event.target.tagName.toLowerCase() !== 'textarea')) {
              scope.$evalAsync(function(){
                tryToSubmit();
              });
            }
          }

          angular.element($window).on('keydown', onEnter);

          iElement.on('$destroy', function () {
            angular.element($window).off('keydown', onEnter);
          });

          ///////////////
          // Functions //
          ///////////////
          function tryToSubmit() {
            var dataToSubmit = scope.contactForm;
            scope.contactFormCtrl.$setSubmitted();

            if (scope.contactFormCtrl.$valid) {
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
    }]);
})();
