import { CommandHandler, ICommand } from '@nestjs/cqrs'
import { CommentDeleteCommand } from '.'
import { Inject } from '@nestjs/common'
import {BaseCommandHandler} from "@common/cqrs";
import {CommentRepositoryService, CommentRepositoryServicePort} from "@core/domain/comment/service";
import {AppEntityNotFoundException} from "@common/exception";

@CommandHandler(CommentDeleteCommand)
export class CommentDeleteCommandHandler extends BaseCommandHandler<ICommand> {
  public constructor(@Inject(CommentRepositoryService) private commentRepositoryService: CommentRepositoryServicePort) {
    super()
  }

  public async run(command: CommentDeleteCommand): Promise<void> {
    const comment = await this.commentRepositoryService.load(command.id)
    if (!comment) {
      throw new AppEntityNotFoundException('Comment', { id: command.id })
    }
    await this.commentRepositoryService.delete(comment)
  }
}
