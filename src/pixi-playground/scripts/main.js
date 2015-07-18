(function (resources) {
  'use strict';

  // Variables
  var stage;
  var renderer;

  // Functions
  function init() {
    // It seems that with a lower fps it moves smoother!
    // todo this is needed in FF on windows
    // TweenMax.ticker.fps(30)

    stage = new PIXI.Stage(0xFFFFFF);
    renderer = new PIXI.autoDetectRenderer(2560, 1440, {
      antialised: false,
      transparent: true
    });
    $('#pixi-playground').append(renderer.view);

    renderer.render(stage);
  }

  // Run block
  init();
})(window.resources);
