import { defineStore } from 'pinia';
export const mainStore = defineStore('main', {
    state: () => {
        return {
            cardTableData: [{
                id: 1,
                type: "江湖牌",
                font: "奇门兵器",
                back: "",
                pack: "标准包"

            }, {
                id: 2,
                type: "江湖牌",
                font: "奇门兵器",
                back: "",
                pack: "标准包"

            }, {
                id: 3,
                type: "江湖牌",
                font: "奇门兵器",
                back: "",
                pack: "标准包"

            }, {
                id: 4,
                type: "江湖牌",
                font: "奇门兵器",
                back: "",
                pack: "标准包"

            }, {
                id: 5,
                type: "江湖牌",
                font: "奇门兵器",
                back: "",
                pack: "标准包"

            }, {
                id: 6,
                type: "江湖牌",
                font: "奇门兵器",
                back: "",
                pack: "标准包"

            }]
        }
    },
    getters: {},
    actions: {}
})