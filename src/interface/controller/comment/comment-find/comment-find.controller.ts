import { QueryBus } from '@nestjs/cqrs'
import { Body, Controller, Get } from '@nestjs/common'
import { init } from '@common/cqrs'
import {Comment} from "@core/domain/comment/entity/comment";
import {CommentFindInput} from "@interface/controller/comment/comment-find/input";
import {CommentOutput} from "@interface/presenter/comment/output/comment";
import {CommentFindQuery} from "@core/application/query";

@Controller()
export class CommentFindController {
  public constructor(private readonly queryBus: QueryBus) {}

  @Get('comments')
  public async commentCreate(@Body() input: CommentFindInput): Promise<CommentOutput[]> {
    const query = init(CommentFindQuery, input)
    const comments = await this.queryBus.execute<CommentFindQuery, Comment[]>(query)
    return comments.map((comment) => new CommentOutput(comment))
  }
}
