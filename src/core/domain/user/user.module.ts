import { Module } from '@nestjs/common'
import { DatabaseDefaultModule } from '@infrastructure/database/postgres/database-default'
import {UserRepositoryService} from "@core/domain/user/service";
import {UserRepositoryServiceAdapter} from "@infrastructure/database/postgres/database-default/service-adapter";

@Module({
  imports: [DatabaseDefaultModule],
  providers: [{ provide: UserRepositoryService, useExisting: UserRepositoryServiceAdapter }],
  exports: [UserRepositoryService],
})
export class UserModule {}
