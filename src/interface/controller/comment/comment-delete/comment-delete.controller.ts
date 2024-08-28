import { CommandBus } from '@nestjs/cqrs'
import { Body, Controller, Delete } from '@nestjs/common'
import { CommentDeleteInput } from './input'
import { init } from '@common/cqrs'
import {CommentDeleteCommand} from "@core/application/command";

@Controller()
export class CommentDeleteController {
  public constructor(private readonly commandBus: CommandBus) {}

  @Delete('comment/delete')
  public async commentCreate(@Body() input: CommentDeleteInput): Promise<void> {
    const command = init(CommentDeleteCommand, input)
    await this.commandBus.execute<CommentDeleteCommand, void>(command)
  }
}
