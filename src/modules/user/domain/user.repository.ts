import User from './user'

// PRINCIPIO SOLID: INVERSION DEPENDENCY
export interface UserRepository {
// design pattern Facade: https://refactoring.guru/es/design-patterns/facade
  list(): Promise<User[]>
  listOne(guid: string): Promise<User>
  insert(user: User): Promise<User>
  update(user: User): Promise<User>
  delete(guid: string): Promise<User>
}
