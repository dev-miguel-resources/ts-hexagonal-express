import { DataSource } from 'typeorm'

export abstract class Bootstrap {
	abstract initialize(): Promise<string | Error | DataSource>
}
