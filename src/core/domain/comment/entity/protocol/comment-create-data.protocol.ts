import { CommentData } from './comment-data.protocol'

export type CommentCreateData = Pick<CommentData, 'text' | 'userId' | 'parentId' >
