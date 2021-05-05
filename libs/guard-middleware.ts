import { NextApiResponse } from 'next';
import { NextApiRequestExtended } from '@/libs/api-handler';

export default function customerGuard(req: NextApiRequestExtended, res: NextApiResponse, next) {
  const { authorization } = req.headers;
  const userId = req.userId;

  if (authorization && userId) {
    next();
  } else {
    res.status(401).json({ error: `Unauthorized. please provide credential to access this resource.` });
  }
}
