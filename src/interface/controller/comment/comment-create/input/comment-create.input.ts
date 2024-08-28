import {Uuid} from "@common/type";

export class CommentCreateInput {
  public text: string

  public userId: Uuid

  public parentId?: null | Uuid
}
