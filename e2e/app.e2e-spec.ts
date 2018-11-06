import { MoonstruckPage } from './app.po';

describe('moonstruck App', () => {
  let page: MoonstruckPage;

  beforeEach(() => {
    page = new MoonstruckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
