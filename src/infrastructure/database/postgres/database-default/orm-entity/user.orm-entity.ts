import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import {CommentOrmEntity} from ".";
import {Uuid} from "@common/type";

@Entity({ name: 'user' })
export class UserOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: Uuid;

  @Column()
  userName: string;

  @Column()
  email: string;

  // @OneToMany(() => CommentOrmEntity, comment => comment.user)
  // comments: CommentOrmEntity[];

  @Column({ precision: 3 })
  public readonly createdAt!: Date

  @Column({ precision: 3 })
  public readonly updatedAt!: Date
}
