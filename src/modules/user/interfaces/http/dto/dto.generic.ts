// Design Pattern Singleton: https://refactoring.guru/es/design-patterns/singleton
export abstract class DTO<Properties, DTO> {
  abstract execute(data: Properties): DTO
}
