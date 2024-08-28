import {commentCommandHandlers} from './comment/all'
import {userCommandHandlers} from "./user/all";

export const commandHandlers = [...commentCommandHandlers, ...userCommandHandlers]
