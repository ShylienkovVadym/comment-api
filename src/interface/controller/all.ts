import {commentControllers} from "./comment/all";
import {userControllers} from "./user/all";

export const controllers = [...commentControllers, ...userControllers]
