import {Comment} from "@core/domain/comment/entity/comment";
import {Uuid} from "@common/type";

export type UserUpdateData = {
  id: Uuid
  userName?: null | string
  email?: null | string
}
