import { Module } from '@nestjs/common'
import { DatabaseDefaultModule } from '@infrastructure/database/postgres/database-default'
import {CommentRepositoryService} from "@core/domain/comment/service";
import {
  CommentRepositoryServiceAdapter
} from "@infrastructure/database/postgres/database-default/service-adapter/comment-repository.service-adapter";

@Module({
  imports: [DatabaseDefaultModule],
  providers: [{ provide: CommentRepositoryService, useExisting: CommentRepositoryServiceAdapter }],
  exports: [CommentRepositoryService],
})
export class CommentModule {}
