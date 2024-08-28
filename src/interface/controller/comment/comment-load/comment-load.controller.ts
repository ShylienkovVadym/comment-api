import { QueryBus } from '@nestjs/cqrs'
import { Body, Controller, Get } from '@nestjs/common'
import { init } from '@common/cqrs'
import {Comment} from "@core/domain/comment/entity/comment";
import {CommentLoadInput} from "@interface/controller/comment/comment-load/input";
import {CommentOutput} from "@interface/presenter/comment/output/comment";
import {CommentLoadQuery} from "@core/application/query";

@Controller()
export class CommentLoadController {
  public constructor(private readonly queryBus: QueryBus) {}

  @Get('comment')
  public async commentLoad(@Body() input: CommentLoadInput): Promise<null | CommentOutput> {
    const query = init(CommentLoadQuery, input)
    const comment = await this.queryBus.execute<CommentLoadQuery, null | Comment>(query)
    return comment ? new CommentOutput(comment) : null
  }
}
