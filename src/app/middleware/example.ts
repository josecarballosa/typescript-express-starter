import { Request, Response, NextFunction } from 'express';

let isSetup = false;

export const ejs = (req: Request, res: Response, next: NextFunction) => {
  if (!isSetup) {
    // ------------------------------------------------------
    //TODO: Add here some setup to happen only on 1st request
    // ------------------------------------------------------

    isSetup = true;
  }
  next();
};
