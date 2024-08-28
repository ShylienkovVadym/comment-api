import { IQuery, QueryHandler } from '@nestjs/cqrs'
import { Inject } from '@nestjs/common'
import {CommentFindQuery} from "./comment-find.query";
import {BaseQueryHandler} from "@common/cqrs";
import {CommentRepositoryService, CommentRepositoryServicePort} from "@core/domain/comment/service";
import {Comment} from "@core/domain/comment/entity/comment";

@QueryHandler(CommentFindQuery)
export class CommentFindQueryHandler extends BaseQueryHandler<IQuery> {
  public constructor(@Inject(CommentRepositoryService) private commentRepositoryService: CommentRepositoryServicePort) {
    super()
  }

  public async run(query: CommentFindQuery): Promise<Comment[]> {
    return this.commentRepositoryService.find(query)
  }
}
