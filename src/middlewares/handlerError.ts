import { NextFunction, Request, Response } from 'express';

export default function handlerError(
  err,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(err);

  if (err.type === 'unauthorized') {
    return res.status(401).send(err.message);
  }
  if (err.type === 'conflict') {
    return res.status(409).send(err.message);
  }
  if (err.type === 'not_found') {
    return res.status(404).send(err.message);
  }
  if (err.type === 'bad_request') {
    return res.status(400).send(err.message);
  }
  if (err.type === 'unprocessable_entity') {
    return res.status(422).send(err.message);
  }
  if (err.type === 'forbidden') {
    return res.status(403).send(err.message);
  }

  return res.sendStatus(500);
}
