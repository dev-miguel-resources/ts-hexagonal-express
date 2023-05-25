import { Router } from 'express'
import UserApplication from '../../application/user.application'
import { UserRepository } from '../../domain/user.repository'
import UserInfraestructure from '../../infraestructure/user.infraestructure'
import UserController from './user.controller'
import { MiddlewareListOne } from './middlewares/user.middleware'

const infraestructure: UserRepository = new UserInfraestructure()
const application = new UserApplication(infraestructure)
const controller = new UserController(application)

class UserRouter {
  readonly expressRouter: Router

  constructor() {
    this.expressRouter = Router()
    this.mountRoutes()
  }

  mountRoutes() {
    // Design Pattern Chain Of Responsability: https://refactoring.guru/es/design-patterns/chain-of-responsibility
    this.expressRouter.post('/insert', controller.insert)
    this.expressRouter.get('/list', controller.list)
    this.expressRouter.get('/listOne/:guid', ...MiddlewareListOne, controller.listOne)
    this.expressRouter.put('/update/:guid', controller.update)
    this.expressRouter.delete('/delete/:guid', controller.delete)
  }
}

export default new UserRouter().expressRouter

// forma 2
/*this.expressRouter.get('/list', (req: Request, res: Response) => {
         controller.list(req, res)
    })*/
