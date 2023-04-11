import http from 'http'
import { Application } from 'express'
import { Bootstrap } from './base.bootstrap'

export default class extends Bootstrap {
  constructor(private readonly app: Application) {
    super()
  }

  // Principio SOLID: Liskov Sustitution
  // Principio SOLID: Single Responsability
  initialize() {
    return new Promise<string | Error>((resolve, reject) => {
      const server = http.createServer(this.app)

      server
        .listen(3000)
        .on('listening', () => {
          resolve('Promise resolve successfully')
          console.log('Listening server on port 3000')
        })
        .on('error', error => {
          reject(error)
          console.log('error on port 3000')
        })
    })
  }
}
