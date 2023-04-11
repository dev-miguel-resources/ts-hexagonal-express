export abstract class Bootstrap {
	// design pattern Facade: https://refactoring.guru/es/design-patterns/facade
	abstract initialize(): Promise<string | Error>
}
