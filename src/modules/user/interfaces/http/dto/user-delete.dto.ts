import { UserProperties } from 'src/modules/user/domain/user'
import { DTO } from './dto.generic'

interface UserDTO {
  name: string
  lastname: string
  email: string
  guid: string
}

export type UserDeleteDTO = UserDTO

export class UserDeleteMapping extends DTO<UserProperties, UserDeleteDTO> {
  execute(data: UserProperties): UserDeleteDTO {
    return {
      name: data.name,
      lastname: data.lastname,
      email: data.email.value,
      guid: data.guid,
    }
  }
}
