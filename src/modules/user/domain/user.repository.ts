import { Result } from 'neverthrow'
import { UserNotFoundException } from './exceptions/user.exception'
import User, { UserUpdate } from './user'

export interface UserRepository {
  // Design Pattern Facade: https://refactoring.guru/design-patterns/facade
  insert(user: User): Promise<User>
  list(): Promise<User[]>
  listOne(guid: string): Promise<Result<User, UserNotFoundException>>
  update(guid: string, user: Partial<UserUpdate>): Promise<Result<User, UserNotFoundException>>
  delete(guid: string): Promise<Result<User, UserNotFoundException>>
}
