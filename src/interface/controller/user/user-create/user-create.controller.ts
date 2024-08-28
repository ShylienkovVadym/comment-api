import { CommandBus } from '@nestjs/cqrs';
import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateInput } from './input';
import { init } from '@common/cqrs';
import { User } from '@core/domain/user/entity/user';
import { UserOutput } from '@interface/presenter/user/output/user';
import { UserCreateCommand } from '@core/application/command';

@Controller()
export class UserCreateController {
  public constructor(private readonly commandBus: CommandBus) {}

  @Post('user/create')
  public async userCreate(@Body() input: UserCreateInput): Promise<UserOutput> {
    const command = init(UserCreateCommand, input);
    const user = await this.commandBus.execute<typeof command, User>(command);
    return new UserOutput(user);
  }
}
