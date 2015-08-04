(function (Animations, ResourceLoader) {
  'use strict';

  ///////////////
  // Variables //
  ///////////////
  var stage;
  var renderer;

  ///////////////
  // Run block //
  ///////////////
  stage = new PIXI.Stage(0xFFFFFF);
  renderer = new PIXI.autoDetectRenderer(2560, 1440, {
    antialised: false,
    transparent: true
  });
  $('#pixi-playground').append(renderer.view);

  renderer.render(stage);

  ResourceLoader.load(function () {
    var animationsResourcesGroup = Animations.init();

    angular.forEach(animationsResourcesGroup, function (animationResourcesGroup) {
      angular.forEach(animationResourcesGroup.resources, function (resource) {
        stage.addChild(resource.sprite);
      });
    });

    renderer.render(stage);

    console.log(animationsResourcesGroup);
  });

  ///////////////////
  // Configuration //
  ///////////////////
  // It seems that with a lower fps it moves smoother!
  // todo this is needed in FF on windows
  // TweenMax.ticker.fps(30);

  // Adds an event listener.
  TweenMax.ticker.addEventListener('tick', function () {
    renderer.render(stage);
  });

})(window.Animations, window.ResourceLoader);
