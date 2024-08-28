import { CommandBus } from '@nestjs/cqrs'
import { Body, Controller, Post } from '@nestjs/common'
import { CommentCreateInput } from './input'
import { init } from '@common/cqrs'
import {Comment} from "@core/domain/comment/entity/comment";
import {CommentOutput} from "@interface/presenter/comment/output/comment";
import {CommentCreateCommand} from "@core/application/command";

@Controller()
export class CommentCreateController {
  public constructor(private readonly commandBus: CommandBus) {}

  @Post('comment/create')
  public async commentCreate(@Body() input: CommentCreateInput): Promise<CommentOutput> {
    const command = init(CommentCreateCommand, input)
    const comment = await this.commandBus.execute<typeof command, Comment>(command)
    return new CommentOutput(comment)
  }
}
