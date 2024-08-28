import { IsUUID } from 'class-validator'
import { Uuid } from '@common/type'

export class CommentLoadQuery {
  @IsUUID()
  public id: Uuid
}
