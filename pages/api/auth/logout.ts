import apiHandler from '@/libs/api-handler';
import { AUTH_COOKIE, AUTH_FLAG_COOKIE } from '@/configs/cookie.config';
import cookie from 'cookie';

export default apiHandler().post(async (req, res) => {
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

  res.status(200).json({ message: 'logged out' });
});
