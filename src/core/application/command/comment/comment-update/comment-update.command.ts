import { IsOptional, IsString, IsUUID, Length } from 'class-validator'
import {CommentUpdateData} from "@core/domain/comment/entity/protocol";
import {Uuid} from "@common/type";

export class CommentUpdateCommand implements CommentUpdateData {
  @IsUUID()
  public id: Uuid

  @IsOptional()
  @IsUUID()
  public userId?: null | Uuid

  @IsOptional()
  @IsUUID()
  public parentId?: null | Uuid

  @IsOptional()
  @Length(1, 5000)
  @IsString()
  public text?: null | string
}
