import { Uuid } from '@common/type'

export class CommentUpdateInput {
  public id: Uuid

  public userId?: null | Uuid

  public parentId?: null | Uuid

  public text?: null | string
}
