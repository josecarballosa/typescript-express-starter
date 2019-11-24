import { Request, Response, NextFunction } from 'express';

export const errors = {
  unknownRoute: (req: Request, res: Response) => {
    res.status(404).json({
      message: 'invalid route',
    });
  },

  // TODO: replace "any" with a better type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  internalError: (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    res.status(500).json({ message: 'something went wrong' });
  },
};
