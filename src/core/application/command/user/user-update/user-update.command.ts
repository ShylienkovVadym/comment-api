import { IsOptional, IsString, IsUUID, Length, IsEmail } from 'class-validator';
import { UserUpdateData } from '@core/domain/user/entity/protocol';
import { Uuid } from '@common/type';

export class UserUpdateCommand implements UserUpdateData {
  @IsUUID()
  public id: Uuid;

  @IsOptional()
  @Length(1, 255)
  @IsString()
  public userName?: null | string;

  @IsOptional()
  @IsEmail()
  public email?: null | string;
}
