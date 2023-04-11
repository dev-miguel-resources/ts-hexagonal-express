import express, { Application } from 'express'
import routerHealth from './helpers/health'
import HandlerErrors from './helpers/errors'

class App {
  readonly expressApp: Application

  constructor() {
    this.expressApp = express()
    this.mountHealthCheck()
    this.mountErrors()
  }

  // Principio Solid: Open/Close
  mountHealthCheck() {
    this.expressApp.use('/', routerHealth)
  }

  mountMiddlewares() {
    this.expressApp.use(express.json())
    this.expressApp.use(express.urlencoded({ extended: true }))
  }

  mountErrors(): void {
    this.expressApp.use(HandlerErrors.notFound)
  }
}

export default new App().expressApp
