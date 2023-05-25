import { validate } from 'class-validator'
import { Request, Response, NextFunction } from 'express'
import { UserListOneValidator } from '../validators/userListOne.validator'

class UserMiddleware {
  static async ValidateListOne(req: Request, _res: Response, next: NextFunction) {
    const { guid } = req.params
    const userListOneValidator = new UserListOneValidator()
    userListOneValidator.guid = guid
    const errors = await validate(userListOneValidator)

    if (errors.length > 0) {
      console.log(errors)
      return next(new Error('Invalid request'))
    }

    next()
  }
}

export const MiddlewareListOne: ((req: Request, res: Response, next: NextFunction) => Promise<void>)[] = [
  UserMiddleware.ValidateListOne
]
