import { Request, Response, NextFunction } from 'express'
import { EmailVO } from '../../domain/value-objects/email.vo';
import { IError } from '../helpers/ierror';
import UserFactory from '../../domain/user-factory';
import UserApplication from '../../application/user.application';

export default class {

	constructor(private application: UserApplication) {
    // patrón de diseño
  }

  async insert(req: Request, res: Response, next: NextFunction) {

	const { name, lastname, email, password } = req.body;

	const emailResult = EmailVO.create(email)
	if (emailResult.isErr()) {
		const err: IError = new Error(emailResult.error.message)
		err.status = 411
		return next(err)
	}

	const userResult = await new UserFactory().create(name, lastname, emailResult.value, password)

	// 1: hacer unos refactors en el factory justamente
	if (userResult.isErr()) {
		const err: IError = new Error(userResult.error.message)
		err.status = 411
		return next(err)
	} else {
		const data = await this.application.insert(userResult) // pendiente
		// dto
	}

  }

  async list(req: Request, res: Response) {

  }

  async listOne(req: Request, res: Response) {}

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}
}
