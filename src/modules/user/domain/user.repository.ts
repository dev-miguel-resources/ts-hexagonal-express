import { Result } from 'neverthrow'
import User, { UserUpdate } from './user'
import { UserNotFoundException } from './exceptions/user.exception'

// PRINCIPIO SOLID: INVERSION DEPENDENCY
export interface UserRepository {
  // design pattern Facade: https://refactoring.guru/es/design-patterns/facade
  insert(user: User): Promise<User>
  list(): Promise<User[]>
  listOne(guid: string): Promise<Result<User, UserNotFoundException>>
  update(guid: string, user: Partial<UserUpdate>): Promise<Result<User, UserNotFoundException>>
  delete(guid: string): Promise<User>
}

