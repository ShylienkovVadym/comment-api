import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserOrmEntity } from '.';
import { Uuid } from '@common/type';

@Entity({ name: 'comment' })
export class CommentOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: Uuid;

  @Column()
  text: string;

  @Column('uuid', { name: 'user_id' })
  userId: Uuid;

  @ManyToOne(() => UserOrmEntity, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: UserOrmEntity;

  @Column({ nullable: true,  name: 'parent_id' })
  parentId?: null | Uuid;

  @ManyToOne(() => CommentOrmEntity, { nullable: true })
  @JoinColumn({ name: 'parent_id' })
  parent?: null | CommentOrmEntity;

  @Column({ precision: 3 })
  public readonly createdAt!: Date

  @Column({ precision: 3 })
  public readonly updatedAt!: Date
}
