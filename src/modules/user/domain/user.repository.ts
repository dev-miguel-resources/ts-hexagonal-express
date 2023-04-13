import User from './user'

// PRINCIPIO SOLID: INVERSION DEPENDENCY
export interface UserRepository {
  list(): User[]
  listOne(guid: string): User
  insert(user: User): User
  update(user: User): User
  delete(guid: string): User
}
