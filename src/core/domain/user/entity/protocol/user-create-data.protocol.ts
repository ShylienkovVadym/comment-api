import {UserData} from "@core/domain/user/entity/protocol/user-data.protocol";


export type UserCreateData = Pick<UserData, 'userName' | 'email' > // | 'comments' >
