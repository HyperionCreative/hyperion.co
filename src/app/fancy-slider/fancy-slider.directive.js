(function () {
  'use strict';

  angular
    .module('app.fancy-slider')
    .directive('hypFancySlider', ['CssVendorPrefixer', 'FancySliderResizer', 'MAX_SUPPORTED_WIDTH', 'MAX_SUPPORTED_HEIGHT', function (CssVendorPrefixer, FancySliderResizer, MAX_SUPPORTED_WIDTH, MAX_SUPPORTED_HEIGHT) {
      return {
        controller: ['$scope', '$timeout', function ($scope, $timeout) {
          var activeSlide = 1,
            animations = {}, blur = {}, controls = {};

          // Input - these are populated from child directives
          this.animations = animations;
          this.blur = blur;

          // Output - this is used by child directives
          this.controls = controls;
          this.controls.changeLeft = changeLeft;
          this.controls.changeRight = changeRight;

          ////////////
          // Public //
          ////////////

          function changeLeft() {
            animations['.slide-' + activeSlide].toLeft();

            activeSlide = activeSlide % 3 + 1;

            animations['.slide-' + activeSlide].toRight(undefined, true);
            animations['.slide-' + activeSlide].toCenter();
          }

          function changeRight() {
            animations['.slide-' + activeSlide].toRight();

            activeSlide = activeSlide - 1;
            activeSlide = (activeSlide === 0) ? 3 : activeSlide;

            animations['.slide-' + activeSlide].toLeft(undefined, true);
            animations['.slide-' + activeSlide].toCenter();
          }

          /////////////
          // Private //
          /////////////

          // This is run when all the inputs have loaded!
          function onInit() {
            animations['.slide-1'].toBottom(undefined, true);
            animations['.slide-2'].toLeft(undefined, true);
            animations['.slide-3'].toLeft(undefined, true);

            animations['.slide-1'].toCenter();
          }

          ///////////////
          // Run Block //
          ///////////////

          var watchForInit = $scope.$watch(function () {
            return angular.isDefined(animations['.slide-1']) && angular.isDefined(blur.blur);
          }, function (result) {
            if (result === true) {
              watchForInit();
              $timeout(onInit, 30);
            }
          });
        }],
        link: function (scope, iElement) {
          var slidesContainer = angular.element(iElement[0].querySelector('.slides-container'));

          // Sets the base resolution
          slidesContainer.css({
            height: MAX_SUPPORTED_HEIGHT + 'px',
            width: MAX_SUPPORTED_WIDTH + 'px'
          });

          FancySliderResizer.onProportionChange(function (proportion) {
            slidesContainer.css({
              'margin-left': -(MAX_SUPPORTED_WIDTH * proportion / 2) + 'px',
            });

            slidesContainer.css(CssVendorPrefixer.prefixProperty('transform', 'translate3d(0,0,0) scale(' + proportion + ',' + proportion + ')'));
          });
        },
        replace: true,
        restrict: 'E',
        templateUrl: 'app/fancy-slider/fancy-slider.html'
      };
    }]);
})();
