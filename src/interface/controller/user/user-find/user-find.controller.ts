import { QueryBus } from '@nestjs/cqrs';
import { Body, Controller, Get } from '@nestjs/common';
import { UserFindInput } from './input';
import { init } from '@common/cqrs';
import { User } from '@core/domain/user/entity/user';
import { UserOutput } from '@interface/presenter/user/output/user';
import { UserFindQuery } from '@core/application/query';

@Controller('api/')
export class UserFindController {
  public constructor(private readonly queryBus: QueryBus) {}

  @Get('users')
  public async userFind(@Body() input: UserFindInput): Promise<UserOutput[]> {
    const query = init(UserFindQuery, input);
    const users = await this.queryBus.execute<UserFindQuery, User[]>(query);
    return users.map((user) => new UserOutput(user));
  }
}
