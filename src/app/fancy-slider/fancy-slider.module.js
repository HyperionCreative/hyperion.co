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

  // Flow'ul lucrurilor
  // 1. Initializeaza pixi si il append'uieste in templateul HTML
  // 2. Apeleaza SliderInitializer.init pentru a initializa toate componentele necesare
  //    2.1 Se incepe cu Resources
  //        2.1.1 Imaginile resurselor sunt descarcate (folosindu-ne de AssetsDownloader)
  //        2.1.2 Resursele sunt create cu imaginile tocmai descarcate
  //        2.1.3 Acestora le este atribuit comportamentul custom in functie de rezolutie
  //    2.2 Se continua cu DepthBars
  //        2.2.1 Imaginile necesare pentru blur sunt descarcate (folosindu-ne de AssetsDownloader)
  //        2.2.2 Resursele sunt create (cele normale dar si blurSprites)
  //        2.2.3 Li se atribuie comportamentul custom in functie de rezolutie
  //    2.3 Se continua cu Blur
  //        2.3.1 Imaginile necesare pentru blur sunt descarcate (folosindu-ne de AssetsDownloader)
  //        2.3.2 Creaza resursele necesare dar si preia cele deja existente (blurSprites din DepthBars)
  //    2.4 Se continua cu Animations
  //        2.4.1 Animatiile sunt create folosindu'ne de Resources
  // 3. Sunt introduse in scena DepthBar'urile
  //    3.1 Tot aici se leaga si stage renderer pentru fiecare Viewport Resize.
  // 4. Se adauga Resursele
  // 5. Se adauga Blur'ul
  // 6. Se aplica z-index'ul
  // 7. Se leaga Animatiile (rudimental - trebuie refacut)
  // 8. Se leaga blur'ul (rudimental - trebuie refacut)

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
