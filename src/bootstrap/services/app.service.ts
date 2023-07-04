import { DB_CONFIG } from '../interfaces/dbConfig.interface'
import yenv from 'yenv'

const env = yenv('.env')

export class AppService {
   static get PORT(): number {
      return +env.PORT || 3000
   }

   static get DBConfig(): DB_CONFIG {
      const pass = env.DB_PASS.toString();
      return {
         host: env.DB_HOST || 'localhost',
         port: +env.DB_PORT || 3308,
         //entities: [process.env.DB_ENTITIES || 'src/**/*.entity.ts'],
         entities: [env.DB_ENTITIES || 'dist/**/*.entity.js'],
         username: env.DB_USER || 'adminUser',
         password: pass || '12345',
         database: env.DB_NAME || 'bddcursonode',
         synchronize: env.DB_SYNC || false,
         logging: env.DB_LOGG || false,
      }
   }
}
