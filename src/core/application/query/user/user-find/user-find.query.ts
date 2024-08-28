import { OrderDir } from '@common/enum'
import { IsEnum, IsInt, IsOptional } from 'class-validator'
import {UserFields} from "@core/domain/user/entity/enum";
import {UsersFindParams} from "@core/domain/user/service";

export class UserFindQuery implements UsersFindParams {
  @IsOptional()
  @IsEnum(UserFields)
  public orderBy?: UserFields

  @IsOptional()
  @IsEnum(OrderDir)
  public orderDir?: OrderDir

  @IsOptional()
  @IsInt()
  public take?: number

  @IsOptional()
  @IsInt()
  public skip?: number
}
