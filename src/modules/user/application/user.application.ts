import User, { UserUpdate } from '../domain/user'
import { UserRepository } from '../domain/user.repository'

export default class UserApplication {

  // Solid Principle: Inversion Dependency
  // Design Pattern Injection Dependency: https://desarrolloweb.com/articulos/patron-diseno-contenedor-dependencias.html
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

  update(guid: string, user: Partial<UserUpdate>) {
    return this.userRepository.update(guid, user)
  }

  delete(guid: string) {
    return this.userRepository.delete(guid)
  }
}
