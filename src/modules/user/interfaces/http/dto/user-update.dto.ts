import { UserProperties } from 'src/modules/user/domain/user'
import { DTO } from './dto.generic'

interface UserDTO {
  name: string
  lastname: string
  email: string
  guid: string
}

export type UserUpdateDTO = UserDTO

export class UserUpdateMapping extends DTO<UserProperties, UserUpdateDTO> {
  execute(data: UserProperties): UserUpdateDTO {
    return {
      name: data.name,
      lastname: data.lastname,
      email: data.email.value,
      guid: data.guid,
    }
  }
}
