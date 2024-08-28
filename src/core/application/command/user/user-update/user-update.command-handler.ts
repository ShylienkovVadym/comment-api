import { CommandHandler, ICommand } from '@nestjs/cqrs';
import { UserUpdateCommand } from './user-update.command';
import { Inject } from '@nestjs/common';
import { BaseCommandHandler } from '@common/cqrs';
import { UserRepositoryService, UserRepositoryServicePort } from '@core/domain/user/service';
import { AppEntityNotFoundException } from '@common/exception';
import { User } from '@core/domain/user/entity/user';
import { UserUpdateData } from '@core/domain/user/entity/protocol';

@CommandHandler(UserUpdateCommand)
export class UserUpdateCommandHandler extends BaseCommandHandler<ICommand> {
  public constructor(@Inject(UserRepositoryService) private userRepositoryService: UserRepositoryServicePort) {
    super();
  }

  public async run(command: UserUpdateCommand): Promise<User> {
    const user = await this.userRepositoryService.load(command.id);
    if (!user) {
      throw new AppEntityNotFoundException('User', { id: command.id });
    }
    const updatedUser = this.applyUpdateData(user, command);
    return this.userRepositoryService.update(updatedUser);
  }

  private applyUpdateData(user: User, data: UserUpdateData): User {
    const { userName, email } = data;
    if (userName) {
      user.userName = userName;
    }
    if (email) {
      user.email = email;
    }
    return user;
  }
}
