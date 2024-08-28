import { CommandHandler, ICommand } from '@nestjs/cqrs'
import { CommentUpdateCommand } from './comment-update.command'
import { Inject } from '@nestjs/common'
import {BaseCommandHandler} from "@common/cqrs";
import {CommentRepositoryService, CommentRepositoryServicePort} from "@core/domain/comment/service";
import {AppEntityNotFoundException} from "@common/exception";
import {Comment} from "@core/domain/comment/entity/comment";
import {CommentUpdateData} from "@core/domain/comment/entity/protocol";


@CommandHandler(CommentUpdateCommand)
export class CommentUpdateCommandHandler extends BaseCommandHandler<ICommand> {
  public constructor(@Inject(CommentRepositoryService) private commentRepositoryService: CommentRepositoryServicePort) {
    super()
  }

  public async run(command: CommentUpdateCommand): Promise<Comment> {
    const comment = await this.commentRepositoryService.load(command.id)
    if (!comment) {
      throw new AppEntityNotFoundException('Comment', { id: command.id })
    }
    const updatedComment = this.applyUpdateData(comment, command)
    return this.commentRepositoryService.update(updatedComment)
  }

  private applyUpdateData(comment: Comment, data: CommentUpdateData): Comment {
    const { text, parentId, userId } = data
    if (parentId) {
      comment.parentId = parentId
    }
    if (userId) {
      comment.userId = userId
    }
    if (text) {
      comment.text = text
    }
    return comment
  }
}
