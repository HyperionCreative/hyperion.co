(function () {
  'use strict';

  // todo
  // compatibility:
  // 1. FF pe OSX trebuie fara RAF si fara AA 
  // 2. IE 11 (si lower presupun) pe Windows (asta era 7) trebuie cu RAF si AA disabled si fps 30
  // 3. FF pe Win 10 se misca mai bine cu CanvasRenderer decat cu webgl
  //
  // tasks:
  // 1. controalele sa suporte cursor custom
  // 2. slider description'ul sa se schimbe si el cu slideul
  // 
  // optional tweak:
  // 1. Easingul Power4 are timp foarte mult pe capetele cu care nu face nimic. As putea sa folosesc Power1 si sa micsorez
  //    durata animatiei proportional astfel in cat sa nu para ca am schimbat easingul.
  //    Noile valori:
  //    this.ANIMATION_DURATION = 780;
  //    this.ANIMATION_EASING = TweenEasings.Power1.easeOut;
  //    this.ANIMATION_THROW_IN_EASING = TweenEasings.Power1.easeOut;
  // 2. Schimband tipul de renderer de la webglrender la CanvasRenderer vad ca micsoreaza timpul de incarcare. nu stiu
  //    ce impact are asupra performantei.
  //    
  //    Test scenario: throttle la 30Mbps si m-am uitat pe timeline cand incepe treaba:
  //      webGL: ~3.23
  //      canvas: ~2.57
  //      
  //      Ce-i drept cred ca are si chrome un mic bug cand initializeaza webgl in fereastra de simulare a altor ecrane.
  //      Totusi chiar si fara asta, diferenta e vizibila.

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
