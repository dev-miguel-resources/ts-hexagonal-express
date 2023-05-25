import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class UserListOneValidator {
  // Design Pattern Decorator: https://refactoring.guru/es/design-patterns/decorator

  @IsString({ message: 'Guid must be a string' })
  @IsNotEmpty({ message: 'Guid must not be empty' })
  @MinLength(10, { message: 'Guid is too short' })
  guid: string
}
