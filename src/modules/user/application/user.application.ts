import User from '../domain/user'
import { UserRepository } from '../domain/user.repository'

export default class UserApplication {
  // SOLID PRINCIPLE: Inversion Dependency
  // DESIGN PATTERN INJECTION DEPENDENCY:
  constructor(private readonly userRepository: UserRepository) {}

  insert(user: User) {
    return this.userRepository.insert(user)
  }
}
