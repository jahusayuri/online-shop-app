import { OnlineShopAppPage } from './app.po';

describe('online-shop-app App', () => {
  let page: OnlineShopAppPage;

  beforeEach(() => {
    page = new OnlineShopAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
