import { ContactFormPage } from './app.po';

describe('contact-form App', function() {
  let page: ContactFormPage;

  beforeEach(() => {
    page = new ContactFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
