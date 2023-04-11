export abstract class Bootstrap {
	abstract initialize(): Promise<string | Error>
}
