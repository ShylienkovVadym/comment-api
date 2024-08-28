import { OrderDir } from '@common/enum'
import {UserFields} from "@core/domain/user/entity/enum";

export class UserFindInput {
  public orderBy?: UserFields

  public orderDir?: OrderDir

  public take?: number

  public skip?: number
}
