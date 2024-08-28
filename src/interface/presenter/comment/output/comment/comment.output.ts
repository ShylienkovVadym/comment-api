import { Uuid } from '@common/type'
import {Comment} from '@core/domain/comment/entity/comment'

export class CommentOutput {
  public readonly id: Uuid

  public readonly text: string

  public userId: Uuid

  public parentId?: null | Uuid

  public readonly createdAt: Date

  public readonly updatedAt: Date

  public constructor(entity: Comment) {
    this.id = entity.id
    this.text = entity.text
    this.userId = entity.userId
    this.parentId = entity.parentId
    this.createdAt = entity.createdAt
    this.updatedAt = entity.updatedAt
  }
}
