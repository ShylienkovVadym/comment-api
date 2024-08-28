import {IsEmail, IsOptional, IsString, IsUUID, Length} from 'class-validator'
import {CommentCreateData} from "@core/domain/comment/entity/protocol";
import {Uuid} from "@common/type";

export class CommentCreateCommand implements CommentCreateData {
  @Length(1, 5000)
  @IsString()
  public text: string

  @IsUUID()
  public userId: Uuid

  @IsOptional()
  @IsUUID()
  public parentId?: null | Uuid
}
