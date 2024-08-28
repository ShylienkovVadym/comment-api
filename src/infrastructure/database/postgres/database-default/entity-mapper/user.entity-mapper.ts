import { Injectable } from '@nestjs/common'
import { UserOrmEntity} from 'src/infrastructure/database/postgres/database-default/orm-entity'
import { User } from '@core/domain/user/entity/user'
import {USER_ID_NEW} from "@core/domain/user/entity/constant";
import {
  CommentEntityMapper
} from "@infrastructure/database/postgres/database-default/entity-mapper/comment.entity-mapper";

@Injectable()
export class UserEntityMapper {
  public constructor(private commentEntityMapper: CommentEntityMapper) {}

  public toDomain(entity: UserOrmEntity): User {
    return new User({
      id: entity.id,
      userName: entity.userName,
      email: entity.email,
      //comments: entity.comments.map(user => this.commentEntityMapper.toDomain(user)),
      createdAt: new Date(entity.createdAt),
      updatedAt: new Date(entity.updatedAt),
    })
  }

  public toPersistence(entity: User): Partial<UserOrmEntity> {
    return {
      id: USER_ID_NEW != entity.id ? entity.id : undefined,
      userName: entity.userName,
      email: entity.email,
      //comments: entity.comments.map(user => this.commentEntityMapper.toPersistence(user)),
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    }
  }
}
