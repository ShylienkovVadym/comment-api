import {IsEmail, IsString, Length} from 'class-validator'
import {UserCreateData} from "@core/domain/user/entity/protocol";

export class UserCreateCommand implements UserCreateData {
  @Length(1, 255)
  @IsString()
  public userName: string

  @IsEmail()
  public email: string
}
