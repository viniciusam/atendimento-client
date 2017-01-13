import { AtendimentoClientPage } from './app.po';

describe('atendimento-client App', function() {
  let page: AtendimentoClientPage;

  beforeEach(() => {
    page = new AtendimentoClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
