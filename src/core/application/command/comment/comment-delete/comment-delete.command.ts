import { IsUUID } from 'class-validator'
import {Uuid} from "@common/type";

export class CommentDeleteCommand {
  @IsUUID()
  public id: Uuid
}
