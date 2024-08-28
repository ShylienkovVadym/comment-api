import { IQuery, QueryHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';
import { BaseQueryHandler } from '@common/cqrs';
import { User } from '@core/domain/user/entity/user';
import { UserRepositoryService, UserRepositoryServicePort } from '@core/domain/user/service';
import { UserLoadQuery } from './user-load.query';

@QueryHandler(UserLoadQuery)
export class UserLoadQueryHandler extends BaseQueryHandler<IQuery> {
  public constructor(@Inject(UserRepositoryService) private userRepositoryService: UserRepositoryServicePort) {
    super();
  }

  public async run(query: UserLoadQuery): Promise<null | User> {
    return this.userRepositoryService.load(query.id);
  }
}
