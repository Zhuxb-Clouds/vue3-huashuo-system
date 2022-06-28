import req from '../libs/axios';
import { queryType, cardType } from "../type/index";
export default {
    getCard(query?: queryType) {
        return req({
            url: `api/card`,
            method: 'get',
            params: {
                id: query?.id,
                type: query?.type,
                pack: query?.pack,
            }
        }) as any
    }
}
