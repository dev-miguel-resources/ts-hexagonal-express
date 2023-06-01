import { UserProperties } from 'src/modules/user/domain/types/userProperties.type'
import { DTO } from './dto.generic'
import { UserDeleteDTO } from './types/userDelete.type'

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
