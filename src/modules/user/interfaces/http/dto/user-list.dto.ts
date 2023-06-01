import { UserProperties } from 'src/modules/user/domain/types/userProperties.type'
import { DTO } from './dto.generic'
import { UserListDTO } from './types/userList.type'

export class UserListMapping extends DTO<UserProperties[], UserListDTO> {
  execute(data: UserProperties[]): UserListDTO {
    return data.map((user: UserProperties) => {
      return {
        name: user.name,
        lastname: user.lastname,
        guid: user.guid,
      }
    })
  }
}
