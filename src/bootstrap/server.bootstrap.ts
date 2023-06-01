import http from 'http'
import { Application } from 'express'
import { Bootstrap } from './base.bootstrap'
import { AppService } from './services/app.service'

export default class extends Bootstrap {
  constructor(private readonly app: Application) {
    super()
  }

  initialize() {
    return new Promise<string | Error>((_resolve, reject) => {
      const server = http.createServer(this.app)

      server
        .listen(`${AppService.PORT}`)
        .on('listening', () => {
          console.log(`Server listening on port: ${AppService.PORT}`)
        })
        .on('error', error => {
          reject(error)
          console.log(`Server error on port: ${AppService.PORT}`)
        })
    })
  }
}
