import { ValueObject } from './vo.class'

interface EmailProps {
	value: string
}

export class EmailVO extends ValueObject<EmailProps> {

	private constructor(props: EmailProps) {
		super(props)
	}

	static create(email: string) {
		if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi)) {
			throw new Error('It\'s not a valid email address')
		}

		return new EmailVO({ value: email })
	}

	get value(): string {
		return this.props.value
	}
}
