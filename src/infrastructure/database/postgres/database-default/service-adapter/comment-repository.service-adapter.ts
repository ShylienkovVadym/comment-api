import { CommentRepositoryServicePort, CommentsFindParams } from '@core/domain/comment/service'
import { Comment } from '@core/domain/comment/entity/comment'
import { CommentEntityMapper } from '../entity-mapper'
import { Uuid } from '@common/type'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CommentOrmEntity } from 'src/infrastructure/database/postgres/database-default/orm-entity'
import { Repository, SelectQueryBuilder } from 'typeorm'
import { OrderDir } from '@common/enum'

@Injectable()
export class CommentRepositoryServiceAdapter implements CommentRepositoryServicePort {
  public constructor(
      private commentEntityMapper: CommentEntityMapper,
      @InjectRepository(CommentOrmEntity)
      private readonly repository: Repository<CommentOrmEntity>,
  ) {}

  public async create(comment: Comment): Promise<Comment> {
    const _commentOrmEntity = this.commentEntityMapper.toPersistence(comment)
    const commentOrmEntity = await this.repository.save(_commentOrmEntity)
    return this.commentEntityMapper.toDomain(commentOrmEntity)
  }

  public async find(params: CommentsFindParams): Promise<Comment[]> {
    const commentOrmEntities = await this.query(params).getMany()
    return commentOrmEntities.map((commentOrmEntity) => this.commentEntityMapper.toDomain(commentOrmEntity))
  }

  public async load(id: Uuid): Promise<null | Comment> {
    const commentOrmEntity = await this.repository.findOneBy({ id: id })
    return commentOrmEntity ? this.commentEntityMapper.toDomain(commentOrmEntity) : null
  }

  public async delete(entity: Comment): Promise<void> {
    const commentOrmEntity = this.commentEntityMapper.toPersistence(entity)
    await this.repository.delete({ id: commentOrmEntity.id })
  }

  public async update(comment: Comment): Promise<Comment> {
    const _commentOrmEntity = this.commentEntityMapper.toPersistence(comment)
    const commentOrmEntity = await this.repository.save(_commentOrmEntity)
    return this.commentEntityMapper.toDomain(commentOrmEntity)
  }

  private query(params: CommentsFindParams): SelectQueryBuilder<CommentOrmEntity> {
    const query = this.repository.createQueryBuilder('user')

    if (params.orderBy) {
      const orderField = `comment.${params.orderBy}`
      const orderDir = params.orderDir === OrderDir.Descending ? 'DESC' : 'ASC'
      query.orderBy(orderField, orderDir)
    }

    if (params.take) {
      query.take(params.take)
    }

    if (params.skip) {
      query.skip(params.skip)
    }
    return query
  }
}
