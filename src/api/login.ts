import req from '../libs/axios';
import { userType } from '../type/index'
export default {
    Login(data: userType) {
        return req({
            url: `api/user/login`,
            headers: { "Content-Type": "application/json" },
            method: 'post',
            data: data
        }) as any
    },
    whoami(): string {
        return req({
            url: `api/user/whoami`,
            headers: { "Content-Type": "application/json" },
            method: 'get',
        }) as any
    }
}