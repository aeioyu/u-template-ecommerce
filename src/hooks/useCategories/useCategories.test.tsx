import { renderHook } from '@testing-library/react-hooks';
import nock from 'nock';

import { categoriesMock } from '../../../.test/mocks/category.mock';
import { MockProviders } from '../../../.test/utils/test-utils';
import useCategories from './useCategories';

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
