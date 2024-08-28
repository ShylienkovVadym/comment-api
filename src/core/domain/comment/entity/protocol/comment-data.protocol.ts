import { Uuid } from "@common/type";

export interface CommentData {
  id: Uuid;
  text: string;
  userId: Uuid;
  parentId?: null | Uuid;
  createdAt: Date;
  updatedAt: Date;
}