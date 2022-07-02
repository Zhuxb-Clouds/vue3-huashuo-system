import req from '../libs/axios';
export default {
    Login(data: any) {
        return req({
            url: `api/user/login`,
            headers: { "Content-Type": "application/json" },
            method: 'post',
            data: data
        }) as any
    },
}