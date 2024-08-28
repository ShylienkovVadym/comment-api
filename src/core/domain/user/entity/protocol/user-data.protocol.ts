import {Uuid} from "@common/type";
import {Comment} from "@core/domain/comment/entity/comment";


export interface UserData {
  id: Uuid
  userName: string
  email: string
  //comments: Comment[]
  createdAt: Date
  updatedAt: Date
}