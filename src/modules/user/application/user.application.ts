import User from '../domain/user'
import { UserRepository } from '../domain/user.repository'

export default class UserApplication {
  // SOLID PRINCIPLE: INVERSION DEPENDENCY
  // DESIGN PATTERN INJECTION DEPENDENCY:
  constructor(private readonly userRepository: UserRepository) {}

  insert(user: User) {
    return this.userRepository.insert(user)
  }

  list() {
	return this.userRepository.list()
  }

  listOne(guid: string) {
	return this.userRepository.listOne(guid)
  }
}
