import apiHandler from '@/libs/api-handler';
import apiClient from '@/libs/api-client';
import { AUTH_COOKIE, AUTH_FLAG_COOKIE } from '@/constants';
import cookie from 'cookie';

export default apiHandler().post(async (req, res) => {
  const params = {
    username: req.body.username,
    password: req.body.password,
  };

  const axiosResponse = await apiClient.post('wp-json/jwt-auth/v1/token', params);
  const apiResponse = axiosResponse?.data;
  const { statusCode, data: loginData, message } = apiResponse;
  const token = loginData?.token;

  if (token) {
    res.setHeader('Set-Cookie', [
      cookie.serialize(AUTH_COOKIE, String(token), {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      }),
      cookie.serialize(AUTH_FLAG_COOKIE, '1', {
        httpOnly: false,
        secure: false,
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      }),
    ]);
  } else {
    res.setHeader('Set-Cookie', [
      cookie.serialize(AUTH_COOKIE, '', {
        httpOnly: true,
        secure: true,
        path: '/',
        maxAge: 0,
      }),
      cookie.serialize(AUTH_FLAG_COOKIE, '', {
        httpOnly: false,
        secure: false,
        path: '/',
        maxAge: 0,
      }),
    ]);
  }

  res.status(statusCode).json({ message });
});
