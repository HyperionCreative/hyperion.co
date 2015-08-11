(function () {
  'use strict';

  angular
    .module('app.fancy-slider')
    .service('FancySliderInitializer', ['$q', 'FancyAnimations', 'FancyBlur', 'FancyDepthBars', 'FancyResources', function ($q, Animations, Blur, DepthBars, Resources) {
      this.init = init;

      ////////////
      // Public //
      ////////////
      function init(onComplete) {
        // This way we don't chain promises. Thus the init processes happen simultaneously.
        $q.all([Resources.init(), DepthBars.init()]).then(function () {
          Blur.init().then(function () {
            Animations.init(Resources.get()).then(function () {
              onComplete();
            });
          });
        });
      }
    }]);
})();
