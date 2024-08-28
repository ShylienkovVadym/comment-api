import { Uuid } from '@common/type';

export type CommentUpdateData = {
  id: Uuid
  text?: null | string
  parentId?: null | Uuid
  userId?: null | Uuid
};
