(function () {
  'use strict';

  angular
    .module('app.contact-form', [])
    .directive('hypContactForm', ['$window', function ($window) {
      return {
        link: function (scope, iElement) {
          scope.isSubmitted = false;
          scope.tryToSubmit = tryToSubmit;

          ///////////////
          // Constants //
          ///////////////
          var INVALID_CLASS = 'invalid-field';
          var INVALID_PLACEHOLDER_SUFFIX = ' - this field is required';

          //////////////////
          // Constructors //
          //////////////////
          function RequiredField(field) {
            this.field = field;
            this.placeholderValue = this.field.attr('placeholder');
            // By default, when the directive gets initialized, all fields are valid. This is needed
            // in order not to call markAsInvalid or markAsValid multiple times!
            this.isMarkedAsValid = true;

            this.handleEvents(this);
          }

          RequiredField.prototype.isValid = function () {
            return this.field.val().length > 0;
          };

          RequiredField.prototype.markAsInvalid = function () {
            if (this.isMarkedAsValid) {
              this.isMarkedAsValid = false;

              this.field.addClass(INVALID_CLASS);
              this.field.attr('placeholder', this.placeholderValue + INVALID_PLACEHOLDER_SUFFIX);
            }
          };

          RequiredField.prototype.markAsValid = function () {
            if (!this.isMarkedAsValid) {
              this.isMarkedAsValid = true;

              this.field.removeClass(INVALID_CLASS);
              this.field.attr('placeholder', this.placeholderValue);
            }
          };

          RequiredField.prototype.handleEvents = function (context) {
            context.field.on('blur', function () {
              if (context.isValid()) {
                context.markAsValid();
              } else {
                // As suggested by Cristian.
                // context.markAsInvalid();
              }
            });

            // If a user pressed enter while focused on a empty input, the input will
            // become invalid. All these events are needed in order to mark it back as valid!
            context.field.on('input change paste', function () {
              context.markAsValid();
            });
          };

          ///////////////
          // Variables //
          ///////////////
          var requiredFields = (function () {
            var
              fields = iElement[0].querySelectorAll('[is-required-field]'),
              toReturn = [];

            for (var i = 0; i < fields.length; i++) {
              toReturn.push(new RequiredField(angular.element(fields[i])));
            }

            return toReturn;
          })();

          ///////////////
          // Functions //
          ///////////////
          function tryToSubmit(dataToSubmit) {
            if (scope.isSubmitted === false) {
              var everythingIsValid = true;

              for (var i = 0; i < requiredFields.length; i++) {
                if (requiredFields[i].isValid() === false) {
                  everythingIsValid = false;

                  requiredFields[i].markAsInvalid();
                }
              }

              if (everythingIsValid) {
                scope.isSubmitted = true;

                scope.onSubmit({
                  data: dataToSubmit
                });
              }
            }
          }

          ///////////////
          // Run block //
          ///////////////
          function onEnter(event) {
            if (event.keyCode === 13) {
              tryToSubmit(scope.contactForm);
            }
          }

          angular.element($window).on('keydown', onEnter);

          iElement.on('$destroy', function () {
            angular.element($window).off('keydown', onEnter);
          });
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
