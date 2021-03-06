import req from '../libs/axios';
import { queryType, optionType, cardType } from "../type/index";
export default {
    getCardById(id: number): Promise<cardType> {
        return req({
            url: `api/onecard`,
            method: 'get',
            params: {
                id: id,
            },
        }) as any
    },
    getCard(query?: queryType): Promise<cardType[]> {
        return req({
            url: `api/card`,
            method: 'get',
            params: {
                id: query?.id,
                type: query?.type,
                pack: query?.pack,
                pageSize: query?.pageSize,
                page: query?.page,
                keyword: query?.keyword,
            },
        }) as any
    },
    getCardTotal(query?: queryType): Promise<cardType[]> {
        return req({
            url: `api/cardtotal`,
            method: 'get',
            params: {
                id: query?.id,
                type: query?.type,
                pack: query?.pack,
                pageSize: query?.pageSize,
                page: query?.page,
            },
        }) as any
    },
    getPack(): optionType[] {
        return req({
            url: `api/pack`,
            method: 'get',
        }) as any
    },
    getType(): optionType[] {
        return req({
            url: `api/type`,
            method: 'get',
        }) as any
    },
    addCard(card: cardType) {
        return req({
            url: `api/addcard`,
            headers: { "Content-Type": "application/json" },
            method: 'post',
            data: card
        }) as any
    },
    editCard(card: cardType) {
        return req({
            url: `api/editcard`,
            headers: { "Content-Type": "application/json" },
            method: 'post',
            data: card
        }) as any
    },
    delCard(id: number) {
        return req({
            url: `api/card`,
            method: 'delete',
            params: { id: id }
        }) as any
    }
}
