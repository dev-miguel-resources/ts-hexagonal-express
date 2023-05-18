import { Result } from 'neverthrow'
import User, { UserUpdate } from './user'
import { UserNotFoundException } from './exceptions/user.exception'

// Solid Principle: Inversion Dependency
export interface UserRepository {
  // Design Pattern Facade: https://refactoring.guru/es/design-patterns/facade
  insert(user: User): Promise<User>
  list(): Promise<User[]>
  listOne(guid: string): Promise<Result<User, UserNotFoundException>>
  update(guid: string, user: Partial<UserUpdate>): Promise<Result<User, UserNotFoundException>>
  delete(guid: string): Promise<Result<User, UserNotFoundException>>
}

