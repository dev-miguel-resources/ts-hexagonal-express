// new property
export interface DB_CONFIG {
  host: string
  port: number
  entities: string[]
  username: string
  password: string
  database: string
  synchronize: boolean
  logging: boolean
  connectionTimeout: number
}
