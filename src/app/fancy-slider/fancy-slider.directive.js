(function () {
  'use strict';

  angular
    .module('app.fancy-slider')
    .directive('hypFancySlider', ['CssVendorPrefixer', 'FancySliderResizer', 'MAX_SUPPORTED_WIDTH', 'MAX_SUPPORTED_HEIGHT', function (CssVendorPrefixer, FancySliderResizer, MAX_SUPPORTED_WIDTH, MAX_SUPPORTED_HEIGHT) {
      return {
        controller: ['$element', '$scope', '$state', '$timeout', function ($element, $scope, $state, $timeout) {
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

            // todo extend this base solution to cover route changes!
            if ($state.current.name === 'root.index') {
              // The user is on the main page. Throw in the first slide!
              animations['.slide-1'].toCenter();
            } else {
              // The user is on a secondary page. Blur all the things!
              animations['.slide-1'].toCenter(undefined, true);
              blur.fastBlur();
            }

            // Without this, the slider may have a very short flicker if the resources
            // are in cache! This ensures that the slider is shown only after the resources
            // are moved on their initial position!
            $element.css({
              opacity: 1
            });
          }

          ///////////////
          // Run Block //
          ///////////////

          // Since this controller depends on its children, it needs to wait
          // for them to load. After everything has been loaded, then we can start.
          var watchForInit = $scope.$watch(function () {
            return Object.keys(animations).length > 0 && Object.keys(blur).length > 0;
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
