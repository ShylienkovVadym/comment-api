import { Injectable } from '@nestjs/common';
import { CommentOrmEntity } from 'src/infrastructure/database/postgres/database-default/orm-entity';
import { Comment } from '@core/domain/comment/entity/comment';
import {COMMENT_ID_NEW} from "@core/domain/comment/entity/constant";

@Injectable()
export class CommentEntityMapper {
  public toDomain(entity: CommentOrmEntity): Comment {
    return new Comment({
      id: entity.id,
      text: entity.text,
      userId: entity.userId,
      parentId: entity.parentId,
      createdAt: new Date(entity.createdAt),
      updatedAt: new Date(entity.updatedAt),
    })
  }

  public toPersistence(entity: Comment): Partial<CommentOrmEntity> {
    return {
      id: COMMENT_ID_NEW != entity.id ? entity.id : undefined,
      text: entity.text,
      userId: entity.userId,
      parentId: entity.parentId,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }
}
