import { CidrInfoPage } from './app.po';

describe('cidr-info App', () => {
  let page: CidrInfoPage;

  beforeEach(() => {
    page = new CidrInfoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
