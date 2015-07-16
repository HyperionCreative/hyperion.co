(function () {
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

    // Create a loader
    var loader = new PIXI.loaders.Loader('assets/');
    // Add the resources
    loader.add('flowerPot', 'slide-1/flower-pot@2x.png');
    loader.add('macbook', 'slide-1/macbook@2x.png');
    loader.add('sketchbook', 'slide-1/sketchbook@2x.png');
    loader.add('handWatch', 'slide-1/watch@2x.png');

    loader.add('imacSecond', 'slide-2/imac@2x.png');
    loader.add('iphoneSecond', 'slide-2/iphone@2x.png');
    loader.add('sketchpad', 'slide-2/sketchpad@2x.png');

    loader.add('imacThird', 'slide-3/imac@2x.png');
    loader.add('iphoneThird', 'slide-3/iphone@2x.png');

    // Start
    loader.load(function () {
      // First slide
      var flowerPot = createSlideResource('assets/slide-1/flower-pot@2x.png', 1710, 380);
      var macbook = createSlideResource('assets/slide-1/macbook@2x.png', 530, 27);
      var sketchbook = createSlideResource('assets/slide-1/sketchbook@2x.png', 16, 354);
      var handWatch = createSlideResource('assets/slide-1/watch@2x.png', 1017, 965);

      stage.addChild(macbook);
      stage.addChild(flowerPot);
      stage.addChild(sketchbook);
      stage.addChild(handWatch);

      // Second slide
      var imacSecond = createSlideResource('assets/slide-2/imac@2x.png', 1525, -150);
      var iphoneSecond = createSlideResource('assets/slide-2/iphone@2x.png', 615, 136);
      var sketchpad = createSlideResource('assets/slide-2/sketchpad@2x.png', -5, 268);

      stage.addChild(imacSecond);
      stage.addChild(iphoneSecond);
      stage.addChild(sketchpad);

      // Third slide
      var imacThird = createSlideResource('assets/slide-3/imac@2x.png', 182, 25);
      var iphoneThird = createSlideResource('assets/slide-3/iphone@2x.png', 618, 768);

      stage.addChild(imacThird);
      stage.addChild(iphoneThird);

      renderer.render(stage);

      // Tweens the first slide
      tweenMe(flowerPot, -500, -500, true);
      tweenMe(macbook, 500, -500);
      tweenMe(sketchbook, -500, 500);
      tweenMe(handWatch, 500, 500);

      // Tweens the second slide
      tweenMe(imacSecond, -500, 500);
      tweenMe(iphoneSecond, 500, 500);
      tweenMe(sketchpad, 500, -500);

      // Tweens the third slide
      tweenMe(imacThird, 500, 500);
      tweenMe(iphoneThird, 500, -500);
    });
  }

  function tweenMe(resource, x, y, render) {
    var tweenOptions = {
      x: x,
      y: y,
      // z: 0,
      rotation: -0.25,

      delay: 0.1,
      ease: Power3.easeInOut,
      repeat: 15,
      yoyo: true
    };

    if (render) {
      tweenOptions.onUpdate = function () {
        renderer.render(stage);
      };
    }

    TweenMax.to(resource, 5, tweenOptions);
  }

  function createSlideResource(path, x, y) {
    var texture = PIXI.Texture.fromImage(path);
    var sprite = new PIXI.Sprite(texture);

    // move the sprite t the center of the screen
    sprite.position.x = x;
    sprite.position.y = y;

    return sprite
  }

  // Run block
  init();
})();
