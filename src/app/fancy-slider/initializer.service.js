(function () {
  'use strict';

  angular
    .module('app.fancy-slider')
    .service('FancySliderInitializer', ['FancyAnimations', 'FancyResources', function (Animations, Resources) {
      this.init = init;

      ////////////
      // Public //
      ////////////
      function init(onComplete) {
        Resources.init(function () {
          var resources = Resources.get();

          Animations.init(resources);


          onComplete();

          // todo delete this
          console.log(resources, Animations.get());
        });
      }
    }]);
})();
