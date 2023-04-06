import express, { Application } from 'express'

class App {
  readonly expressApp: Application

  constructor() {
    this.expressApp = express()
  }

  mountHealthCheck() {
    this.expressApp.use('/')
  }
}

export default new App().expressApp


