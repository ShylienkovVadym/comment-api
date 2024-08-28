import { CommentData, CommentCreateData } from '../protocol';
import { COMMENT_ID_NEW } from '../constant';
import { Uuid } from "@common/type";

export class Comment {
  public readonly id: Uuid;
  #text: string;
  #userId: Uuid;
  #parentId?: null | Uuid;
  public readonly createdAt: Date;
  #updatedAt: Date;

  public get text(): string {
    return this.#text;
  }

  public set text(text: string) {
    this.#text = text;
    this.update();
  }

  public get userId(): Uuid {
    return this.#userId;
  }

  public set userId(userId: Uuid) {
    this.#userId = userId;
    this.update();
  }

  public get parentId(): null | undefined | Uuid{
    return this.#parentId;
  }

  public set parentId(parentId: null | undefined | Uuid) {
    this.#parentId = parentId;
    this.update();
  }

  public get updatedAt(): Date {
    return this.#updatedAt;
  }

  public constructor(data: CommentData) {
    this.id = data.id;
    this.#text = data.text;
    this.#userId = data.userId;
    this.#parentId = data.parentId;
    this.createdAt = data.createdAt;
    this.#updatedAt = data.updatedAt;
  }

  public static create(data: CommentCreateData): Comment {
    const createdAt = new Date();
    return new Comment({ id: COMMENT_ID_NEW, createdAt, updatedAt: createdAt, ...data });
  }

  private update(): void {
    this.#updatedAt = new Date();
  }
}
