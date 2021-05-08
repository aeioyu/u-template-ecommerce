import useCategories from './useCategories';
import nock from 'nock';
import { renderHook } from '@testing-library/react-hooks';
import { MockProviders } from '@/.test/utils/test-utils';
import { categoriesMock } from '@/.test/mocks/category.mock';

beforeAll(() => {
  nock('http://localhost:80').get('/api/categories').reply(200, categoriesMock);
});

describe('useCategories', () => {
  test('should return categories', async () => {
    const { result, waitFor } = renderHook(() => useCategories(), { wrapper: MockProviders });

    await waitFor(() => {
      return !!result.current.categories.data;
    });

    expect(result.current.categories.data).toEqual(categoriesMock);
  });
});
