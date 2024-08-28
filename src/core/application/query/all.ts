import {commentQueryHandlers} from "@core/application/query/comment/all";
import {userQueryHandlers} from "@core/application/query/user/all";

export const queryHandlers = [...commentQueryHandlers, ...userQueryHandlers]
