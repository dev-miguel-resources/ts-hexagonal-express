import User from '../domain/user'
import { UserRepository } from '../domain/user.repository'

export default class UserInfraestructure implements UserRepository {
  list(): Promise<User[]> {
    throw new Error('Method not implemented.')
  }
  listOne(guid: string): Promise<User> {
    throw new Error('Method not implemented.')
  }
  insert(user: User): Promise<User> {
    throw new Error('Method not implemented.')
  }
  update(user: User): Promise<User> {
    throw new Error('Method not implemented.')
  }
  delete(guid: string): Promise<User> {
    throw new Error('Method not implemented.')
  }
}
