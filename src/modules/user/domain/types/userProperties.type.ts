import { UserOptional } from '../interfaces/userOptional.interface'
import { UserRequired } from '../interfaces/userRequired.interface'

export type UserProperties = Required<UserRequired> & Partial<UserOptional>
