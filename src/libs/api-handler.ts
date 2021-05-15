// import { verify } from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

export interface NextApiRequestExtended extends NextApiRequest {
  userId: number | null;
  username: string | null;
}

const withAuthVerify = (req, res, next) => {
  // req.userId = null;
  // req.username = null;

  // const { authorization } = req.headers;

  // if (authorization) {
  //   const jwtToken = authorization.replace('Bearer ', '');
  //   verify(jwtToken, process.env.JWT_SECRET, (error: any, decoded: any) => {
  //     console.log({ decoded });

  //     if (!error && decoded) {
  //       req.userId = decoded.userId;
  //       req.username = decoded.username;
  //     }
  //   });
  // }

  next();
};

const apiHandler = () =>
  nextConnect<NextApiRequestExtended, NextApiResponse>({
    onError(error, req, res) {
      console.log(error);
      res.status(501).json({ error: `sorry something happened ${error}` });
    },
    onNoMatch(req, res) {
      res.status(405).json({ error: `method ${req.method} is not allowed` });
    },
  }).use(withAuthVerify);

export default apiHandler;
