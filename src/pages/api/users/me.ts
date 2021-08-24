import apiHandler from '@/libs/api-handler';
import guard from '@/libs/guard-middleware';
import WPClient from '@/libs/wp-client';
import { AUTH_COOKIE } from '@/configs/cookie.config';
import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';
import { UserModel } from '@/composables/types/user.type';

export default apiHandler()
  .use(guard)
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    const authToken = req.cookies[AUTH_COOKIE];
    const response: AxiosResponse<UserModel> = await WPClient.get('/wp-json/wp/v2/users/me', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    const data = response?.data;

    res.status(200).json(data);
  });
