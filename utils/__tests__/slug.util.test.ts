import { selectSlugIdFromUrl } from '../slug.util';

describe('slug.util', () => {
  test('should return correct pageId and pageType', () => {
    const slug = 'thisisexamslug-cat.12';
    const { pageId, pageType } = selectSlugIdFromUrl(slug);
    expect(pageId).toEqual('12');
    expect(pageType).toEqual('cat');
  });
});
