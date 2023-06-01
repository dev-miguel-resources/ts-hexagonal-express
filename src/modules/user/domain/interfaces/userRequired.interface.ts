import { EmailVO } from '../value-objects/email.vo'

export interface UserRequired {
  name: string
  lastname: string
  email: EmailVO
  password: string
}
