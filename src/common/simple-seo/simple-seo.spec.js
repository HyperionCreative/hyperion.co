(function () {
  'use strict';

  describe('simpleSeoService - ', function () {
    var $document = $(document);

    describe('when the 3 seo tags (title, meta description and meta keywords) do not exist on the page - ', function () {
      var simpleSeoService;

      beforeEach(function () {
        $document.find('head > title').remove();
        $document.find('head > meta[name="description"]').remove();
        $document.find('head > meta[name="keywords"]').remove();

        module('common.simple-seo');

        inject(function (_simpleSeoService_) {
          simpleSeoService = _simpleSeoService_;
        });
      });

      it('it creates the missing title tag and sets its content correctly', function () {
        simpleSeoService.title = 'My awesome title';

        expect(simpleSeoService.title).toEqual('My awesome title');
        expect($document.find('head > title').text()).toEqual('My awesome title');
      });

      it('it creates the missing meta description tag and sets its content correctly', function () {
        simpleSeoService.description = 'My awesome description';

        expect(simpleSeoService.description).toEqual('My awesome description');
        expect($document.find('head > meta[name="description"]').attr('content')).toEqual('My awesome description');
      });

      it('it creates the missing meta keywords tag and sets its content correctly', function () {
        simpleSeoService.keywords = 'awesome, simple, seo';

        expect(simpleSeoService.keywords).toEqual('awesome, simple, seo');
        expect($document.find('head > meta[name="keywords"]').attr('content')).toEqual('awesome, simple, seo');
      });
    });
  });
})();
