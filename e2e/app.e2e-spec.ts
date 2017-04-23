import { Angular4LearningThreejsPage } from './app.po';

describe('angular4-learning-threejs App', () => {
  let page: Angular4LearningThreejsPage;

  beforeEach(() => {
    page = new Angular4LearningThreejsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
