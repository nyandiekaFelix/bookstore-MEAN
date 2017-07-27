import { BookstoreMeanPage } from './app.po';

describe('bookstore-mean App', () => {
  let page: BookstoreMeanPage;

  beforeEach(() => {
    page = new BookstoreMeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
