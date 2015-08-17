(function () {
  'use strict';

  angular
    .module('app.fancy-slider.animations')
    .service('FancyAnimationsInitializer', ['$q', 'FancyAnimationsControllers', 'FancyAnimationsTimelines', function ($q, AnimationsControllers, Timelines) {
      this.init = init;

      function init(stage, renderer, resources) {
        var deferred = $q.defer();

        Timelines.init(stage, renderer, resources);
        AnimationsControllers.init(Timelines.get());

        deferred.resolve();

        return deferred.promise;
      }
    }]);
})();
