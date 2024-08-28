import { IsUUID } from 'class-validator'
import {Uuid} from "@common/type";

export class UserDeleteCommand {
  @IsUUID()
  public id: Uuid
}
