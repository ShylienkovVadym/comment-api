import { UserData, UserCreateData } from '../protocol'
import {USER_ID_NEW} from '../constant'
import {Comment} from "@core/domain/comment/entity/comment"
import {Uuid} from "@common/type"


export class User {
  public readonly id: Uuid

  #userName: string

  public get userName(): string {
    return this.#userName
  }

  public set userName(username: string) {
    this.#userName = username
    this.update()
  }

  #email: string

  public get email(): string {
    return this.#email;
  }

  public set email(email: string) {
    this.#email = email
    this.update()
  }

  // #comments: Comment[]
  //
  // public get comments(): Comment[] {
  //   return this.#comments;
  // }
  //
  // public set comments(comments: Comment[]) {
  //   this.#comments = comments
  //   this.update()
  // }

  public readonly createdAt: Date;

  #updatedAt: Date

  public get updatedAt(): Date {
    return this.#updatedAt
  }

  public constructor(data: UserData) {
    this.id = data.id
    this.#userName = data.userName
    this.#email = data.email
    //this.#comments = data.comments
    this.createdAt = data.createdAt
    this.#updatedAt = data.updatedAt
  }

  public static create(data: UserCreateData): User {
    const createdAt = new Date()
    return new User({ id: USER_ID_NEW, createdAt, updatedAt: createdAt, ...data })
  }

  private update(): void {
    this.#updatedAt = new Date()
  }
}
