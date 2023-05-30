import { Request, Response } from 'express'
import { IError } from 'src/modules/user/interfaces/helpers/ierror'

export default class {
  static notFound(_req: Request, res: Response): void {
    res.status(404).send('Route Not Found')
  }

  static genericError(error: IError, _req: Request, res: Response): void {
    res.status(error.status || 500).json({
      message: error.message,
      stack: error.stack,
    })
  }
}
