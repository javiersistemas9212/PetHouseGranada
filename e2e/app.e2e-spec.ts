import { PetHousePage } from './app.po';

describe('pet-house App', function() {
  let page: PetHousePage;

  beforeEach(() => {
    page = new PetHousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
