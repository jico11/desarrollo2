import { Desarrollo2Page } from './app.po';

describe('desarrollo2 App', () => {
  let page: Desarrollo2Page;

  beforeEach(() => {
    page = new Desarrollo2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
