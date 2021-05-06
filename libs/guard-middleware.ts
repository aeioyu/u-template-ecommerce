import { NextApiResponse } from 'next';
import { NextApiRequestExtended } from '@/libs/api-handler';
import { AUTH_COOKIE } from '@/constants';

export default function customerGuard(req: NextApiRequestExtended, res: NextApiResponse, next) {
  const authCookie = req.cookies[AUTH_COOKIE];

  if (!authCookie) {
    res.status(401).json({ error: `Unauthorized. please provide credential to access this resource.` });
  } else {
    next();
  }
}
