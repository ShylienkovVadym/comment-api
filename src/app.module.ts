import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import {CqrsModule} from "@nestjs/cqrs";
import {CommentModule} from "@core/domain/comment";
import {commandHandlers} from "@core/application/command/all";
import {queryHandlers} from "@core/application/query/all";
import {controllers} from "@interface/controller/all";
import {UserModule} from "@core/domain/user";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
    }),
    CqrsModule,
    CommentModule,
    UserModule,
  ],
  providers: [...commandHandlers, ...queryHandlers],
  controllers: [...controllers],
})
export class AppModule {}
