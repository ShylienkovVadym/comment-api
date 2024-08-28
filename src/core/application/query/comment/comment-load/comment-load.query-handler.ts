import { IQuery, QueryHandler } from '@nestjs/cqrs'
import { Inject } from '@nestjs/common'
import { BaseQueryHandler } from '@common/cqrs'
import {Comment} from "@core/domain/comment/entity/comment";
import {CommentRepositoryService, CommentRepositoryServicePort} from "@core/domain/comment/service";
import {CommentLoadQuery} from './comment-load.query';

@QueryHandler(CommentLoadQuery)
export class CommentLoadQueryHandler extends BaseQueryHandler<IQuery> {
  public constructor(@Inject(CommentRepositoryService) private commentRepositoryService: CommentRepositoryServicePort) {
    super()
  }

  public async run(query: CommentLoadQuery): Promise<null | Comment> {
    return this.commentRepositoryService.load(query.id)
  }
}
