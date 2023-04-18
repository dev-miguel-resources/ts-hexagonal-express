import bcrypt from 'bcryptjs'

export class UserPasswordService {

	static hash(password: string): Promise<string> {
		return bcrypt.hash(password, 10)
	}
}
