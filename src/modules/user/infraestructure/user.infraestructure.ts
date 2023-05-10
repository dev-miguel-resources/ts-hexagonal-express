import User from '../domain/user'
import { UserRepository } from '../domain/user.repository'
import { UserEntity } from './user.entity'
import DatabaseBootstrap from '../../../bootstrap/database.bootstrap'
import { EmailVO } from '../domain/value-objects/email.vo'

export default class UserInfraestructure implements UserRepository {
  async insert(user: User): Promise<User> {
    const userInsert = new UserEntity()
    const { guid, name, lastname, email, password, refreshToken, active } = user.properties()
    Object.assign(userInsert, {
      guid,
      name,
      lastname,
      email: email.value,
      password,
      refreshToken,
      active,
    })

    await DatabaseBootstrap.dataSource.getRepository(UserEntity).save(userInsert)

    return user
  }

  // pendiente de terminar
  async list(): Promise<User[]> {
    /*const repo = DatabaseBootstrap.dataSource.getRepository(UserEntity)

    const result = await repo.find({ where: { active: true } })

    return result.map((el: UserEntity) => {
      const emailResult = EmailVO.create(el.email)

      // proceso pendiente

      return new User({
        guid: el.guid,
        name: el.name,
        lastname: el.lastname,
        email: emailResult.value,
        password: el.password,
        refreshToken: el.refreshToken,
        active: el.active,
      })
    })*/
  }

  listOne(guid: string): Promise<User> {
    throw new Error('Method not implemented.')
  }

  update(user: User): Promise<User> {
    throw new Error('Method not implemented.')
  }
  delete(guid: string): Promise<User> {
    throw new Error('Method not implemented.')
  }
}
