(function () {
  'use strict';

  angular
    .module('app.fancy-slider')
    .service('FancySliderInitializer', ['FancyAnimations', 'FancyDepthBars', 'FancyResources', function (Animations, DepthBars, Resources) {
      this.init = init;

      ////////////
      // Public //
      ////////////
      function init(onComplete) {
        Resources.init(function () {
          DepthBars.init(function () {
            Animations.init(Resources.get());

            onComplete();

            // todo delete this
            console.log(Resources.get(), Animations.get(), DepthBars.get());
          });
        });
      }
    }]);
})();
