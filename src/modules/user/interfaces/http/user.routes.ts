import { Router } from 'express'
import UserApplication from '../../application/user.application'
import { UserRepository } from '../../domain/user.repository'
import UserInfraestructure from '../../infraestructure/user.infraestructure'
import UserController from './user.controller'

const infraestructure: UserRepository = new UserInfraestructure()
const application = new UserApplication(infraestructure)
const controller = new UserController(application)

class UserRouter {
  readonly expressRouter: Router

  constructor() {
    this.expressRouter = Router()
  }

  // cargar las rutas mediante express router
  mountRoutes() {
    //this.expressRouter.post('/', controller.insert())
  }
}

export default new UserRouter().expressRouter

/*
	mountRoutes() {
    this.expressRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
      controller.insert(req, res, next)
    })
  }
*/
