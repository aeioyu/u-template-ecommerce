import apiHandler from '@/libs/api-handler';
import guard from '@/libs/guard-middleware';
import apiClient from '@/libs/api-client';
import { AUTH_COOKIE } from '@/constants';
import { NextApiRequest, NextApiResponse } from 'next';

export default apiHandler()
  .use(guard)
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const authToken = req.cookies[AUTH_COOKIE];
    const response = await apiClient.get('/wp-json/wp/v2/users/me', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const data = response?.data;

    res.status(200).json(data);
  });
