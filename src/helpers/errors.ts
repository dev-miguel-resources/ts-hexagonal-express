import { Request, Response } from 'express'

export default class {

   static notFound(_req: Request, res: Response): void {
    res.status(404).send('Not Found')
  }
}

