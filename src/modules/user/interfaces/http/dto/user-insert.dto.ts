import { UserProperties } from 'src/modules/user/domain/types/userProperties.type'
import { DTO } from './dto.generic'
import { UserInsertOneDTO } from './types/userInsert.type'

export class UserInsertMapping extends DTO<UserProperties, UserInsertOneDTO> {
  execute(data: UserProperties): UserInsertOneDTO {
    return {
      name: data.name,
      lastname: data.lastname,
      email: data.email.value,
      guid: data.guid,
    }
  }
}
