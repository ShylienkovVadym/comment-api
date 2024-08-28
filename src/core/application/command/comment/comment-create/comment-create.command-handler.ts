import 'reflect-metadata'
import { CommandHandler, ICommand } from '@nestjs/cqrs'
import { Inject } from '@nestjs/common'
import {CommentCreateCommand} from ".";
import {BaseCommandHandler} from "@common/cqrs";
import {CommentRepositoryService, CommentRepositoryServicePort} from "@core/domain/comment/service";
import {Comment} from "@core/domain/comment/entity/comment";


@CommandHandler(CommentCreateCommand)
export class CommentCreateCommandHandler extends BaseCommandHandler<ICommand> {
  public constructor(@Inject(CommentRepositoryService) private commentRepositoryService: CommentRepositoryServicePort) {
    super()
  }

  public async run(command: CommentCreateCommand): Promise<Comment> {
    const comment = Comment.create(command)
    return this.commentRepositoryService.create(comment)
  }
}