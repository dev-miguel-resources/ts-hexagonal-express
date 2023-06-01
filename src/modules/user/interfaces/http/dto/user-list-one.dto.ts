import { UserProperties } from 'src/modules/user/domain/types/userProperties.type'
import { DTO } from './dto.generic'
import { UserListOneDTO } from './types/userListOne.type'

export class UserListOneMapping extends DTO<UserProperties, UserListOneDTO> {
  execute(data: UserProperties): UserListOneDTO {
    return {
      name: data.name,
      lastname: data.lastname,
      email: data.email.value,
      guid: data.guid,
    }
  }
}
