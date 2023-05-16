import User, { UserUpdate } from '../domain/user'
import { UserRepository } from '../domain/user.repository'
import { UserEntity } from './user.entity'
import DatabaseBootstrap from '../../../bootstrap/database.bootstrap'
import { EmailVO } from '../domain/value-objects/email.vo'
import { UserEmailInvalidException, UserNotFoundException } from '../domain/exceptions/user.exception'
import { Result, err, ok } from 'neverthrow'

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

  async list(): Promise<User[]> {
    const repo = DatabaseBootstrap.dataSource.getRepository(UserEntity)

    const result = await repo.find({ where: { active: true } })

    return result.map((el: UserEntity) => {
      const emailResult = EmailVO.create(el.email)

      if (emailResult.isErr()) {
        throw new UserEmailInvalidException()
      }

      return new User({
        guid: el.guid,
        name: el.name,
        lastname: el.lastname,
        email: emailResult.value,
        password: el.password,
        refreshToken: el.refreshToken,
        active: el.active,
      })
    })
  }

  async listOne(guid: string): Promise<Result<User, UserNotFoundException>> {
    const repo = DatabaseBootstrap.dataSource.getRepository(UserEntity)

    const result = await repo.findOne({ where: { guid } })
    const emailResult = EmailVO.create(result.email)

    if (emailResult.isErr()) {
      return err(new UserEmailInvalidException())
    }

    if (!result) {
      return err(new UserNotFoundException())
    } else {
      return ok(
        new User({
          guid: result.guid,
          name: result.name,
          lastname: result.lastname,
          email: emailResult.value,
          password: result.password,
          refreshToken: result.refreshToken,
          active: result.active,
        }),
      )
    }
  }

  async update(guid: string, user: Partial<UserUpdate>): Promise<Result<User, UserNotFoundException>> {

	const repo = DatabaseBootstrap.dataSource.getRepository(UserEntity)

	const userFound = await repo.findOne({
		where: { guid }
	})

	// pendiente por resolver luego de comerciales

  }
  delete(guid: string): Promise<User> {
    throw new Error('Method not implemented.')
  }
}
