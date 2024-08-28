import { CommandBus } from '@nestjs/cqrs'
import { Body, Controller, Post } from '@nestjs/common'
import { CommentUpdateInput } from './input'
import {Comment} from '@core/domain/comment/entity/comment'
import { init } from '@common/cqrs'
import {CommentUpdateCommand} from "@core/application/command";
import {CommentOutput} from "@interface/presenter/comment/output/comment";

@Controller()
export class CommentUpdateController {
  public constructor(private readonly commandBus: CommandBus) {}

  @Post('comment/update')
  public async commentCreate(@Body() input: CommentUpdateInput): Promise<CommentOutput> {
    const command = init(CommentUpdateCommand, input)
    const comment = await this.commandBus.execute<CommentUpdateCommand, Comment>(command)
    return new CommentOutput(comment)
  }
}
