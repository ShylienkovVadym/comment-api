import { Comment } from '../entity/comment'
import { OrderDir } from '@common/enum'
import { Uuid } from '@common/type'
import { CommentUpdateData } from '@core/domain/comment/entity/protocol'
import {CommentFields} from "@core/domain/comment/entity/enum";

export type CommentsFindParams = {
  orderBy?: CommentFields
  orderDir?: OrderDir
  take?: number
  skip?: number
}

export interface CommentRepositoryServicePort {
  create(comment: Comment): Promise<Comment>
  update(data: CommentUpdateData): Promise<Comment>
  delete(entity: Comment): Promise<void>
  load(id: Uuid): Promise<null | Comment>
  find(params: CommentsFindParams): Promise<Comment[]>
}

export const CommentRepositoryService = Symbol('Comment repository service')
