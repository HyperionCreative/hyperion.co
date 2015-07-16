// Asa se deseneaza un shape colorat!
(function () {
  var graphics = new PIXI.Graphics();

  // set a fill and line style
  graphics.beginFill(0xFF3300, 0.5); // color, opacity
  graphics.drawRect(50, 50, 200, 100); // x, y, width, height
  graphics.endFill();

  // Adauga in stage
  stage.addChild(graphics);
})();

// Functie ce returneaza un sprite folosind o imagine
(function () {
  function createSlideResource(path, x, y) {
    var texture = PIXI.Texture.fromImage(path);
    var sprite = new PIXI.Sprite(texture);

    // center the sprites anchor point
    // sprite.anchor.x = 0.5;
    // sprite.anchor.y = 0.5;

    // move the sprite t the center of the screen
    sprite.position.x = x;
    sprite.position.y = y;

    return sprite
  }
})();

// Creaza un loader pt a incarca resurse
(function () {
  // Create a loader
  var loader = new PIXI.loaders.Loader('assets/slide-1/');
  // Add the resources
  loader.add('flowerPot', 'flower-pot@2x.png');
  loader.add('macbook', 'macbook@2x.png');
  loader.add('sketchbook', 'sketchbook@2x.png');
  loader.add('watch', 'watch@2x.png');
  // Start
  loader.load(function () {
    var flowerPot = createSlideResource('assets/slide-1/flower-pot@2x.png', 1710, 380);
    var macbook = createSlideResource('assets/slide-1/macbook@2x.png', 530, 27);
    var sketchbook = createSlideResource('assets/slide-1/sketchbook@2x.png', 16, 354);
    var watch = createSlideResource('assets/slide-1/watch@2x.png', 1017, 965);

    stage.addChild(flowerPot);
    stage.addChild(macbook);
    stage.addChild(sketchbook);
    stage.addChild(watch);

    renderer.render(stage);
  });
})();
