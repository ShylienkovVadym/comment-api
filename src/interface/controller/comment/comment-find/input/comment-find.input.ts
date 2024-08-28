import { OrderDir } from '@common/enum'
import {CommentFields} from "@core/domain/comment/entity/enum";

export class CommentFindInput {
  public orderBy?: CommentFields

  public orderDir?: OrderDir

  public take?: number

  public skip?: number
}
