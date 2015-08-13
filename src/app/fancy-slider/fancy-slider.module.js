(function () {
  'use strict';

  // todo
  // compatibility:
  // 1. FF pe OSX trebuie fara RAF si fara AA 
  // 2. IE 11 (si lower presupun) pe Windows (asta era 7) trebuie cu RAF si AA disabled si fps 30
  //
  // tasks:
  // 1. preloaderul sa stea mai mult ca sa apara slideul full incarcat. acum barele clipesc.
  // 2. daca dai sa schimbi slideul in timp ce se schimba, sa bage viteza
  // 3. blurul o sa si schimbe image on resize. acum e fixa
  // 4. controalele sa suporte cursor custom
  // 5. slider description'ul sa se schimbe si el cu slideul

  angular
    .module('app.fancy-slider', [
      'app.fancy-slider.animations',
      'app.fancy-slider.blur',
      'app.fancy-slider.depth-bars',
      'app.fancy-slider.resizer',
      'app.fancy-slider.resources',
      'app.fancy-slider.slide-description',
      'common.pixi',
      'common.viewport-size'
    ]);
})();
