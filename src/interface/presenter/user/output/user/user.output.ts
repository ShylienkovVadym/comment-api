import { Uuid } from '@common/type';
import { User } from '@core/domain/user/entity/user';

export class UserOutput {
  public readonly id: Uuid;

  public readonly userName: string;

  public readonly email: string;

  public readonly createdAt: Date;

  public readonly updatedAt: Date;

  public constructor(entity: User) {
    this.id = entity.id;
    this.userName = entity.userName;
    this.email = entity.email;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
