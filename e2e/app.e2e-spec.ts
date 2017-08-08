import { BooksForumPage } from './app.po';

describe('books-forum App', () => {
  let page: BooksForumPage;

  beforeEach(() => {
    page = new BooksForumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
