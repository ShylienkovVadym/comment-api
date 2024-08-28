import { OrderDir } from '@common/enum'
import { IsEnum, IsInt, IsOptional } from 'class-validator'
import {CommentFields} from "@core/domain/comment/entity/enum";
import {CommentsFindParams} from "@core/domain/comment/service";

export class CommentFindQuery implements CommentsFindParams {
  @IsOptional()
  @IsEnum(CommentFields)
  public orderBy?: CommentFields

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
