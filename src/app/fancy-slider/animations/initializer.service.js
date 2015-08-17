(function () {
  'use strict';

  angular
    .module('app.fancy-slider.animations')
    .service('FancyAnimationsInitializer', ['$q', 'FancyAnimationsControllers', 'FancyAnimationsTimelines', function ($q, AnimationsControllers, Timelines) {
      this.init = init;

      function init(resources) {
        var deferred = $q.defer();

        Timelines.init(resources);
        AnimationsControllers.init(Timelines.get());

        deferred.resolve();

        return deferred.promise;
      }
    }]);
})();
