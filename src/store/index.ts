import { defineStore } from 'pinia';
export const mainStore = defineStore('main', {
  state: () => {
    return {
      cardTable: [{}],
      typeOptions: [{
        label: "江湖牌",
        value: "江湖牌"
      }, {
        label: "起始牌",
        value: "起始牌"
      }, {
        label: "结局牌",
        value: "结局牌"
      }, {
        label: "奇遇牌",
        value: "奇遇牌"
      }, {
        label: "箴言牌",
        value: "箴言牌"
      }],
      packOptions: [{
        label: "标准包",
        value: "标准包"
      }, {
        label: "江湖夜雨",
        value: "江湖夜雨"
      }, {
        label: "第一次众筹赠送",
        value: "第一次众筹赠送"
      }, {
        label: "儿女情长",
        value: "儿女情长"
      }],
      cardTableData: [{
        id: 1,
        type: "江湖牌",
        front: "奇门兵器",
        back: "",
        pack: "标准包"

      }, {
        id: 2,
        type: "江湖牌",
        front: "奇门兵器",
        back: "",
        pack: "标准包"

      }, {
        id: 3,
        type: "江湖牌",
        front: "奇门兵器",
        back: "",
        pack: "标准包"

      }, {
        id: 4,
        type: "江湖牌",
        front: "奇门兵器",
        back: "",
        pack: "标准包"

      }, {
        id: 5,
        type: "江湖牌",
        front: "奇门兵器",
        back: "",
        pack: "标准包"

      }, {
        id: 6,
        type: "江湖牌",
        front: "奇门兵器",
        back: "",
        pack: "标准包"

      }]
    }
  },
  getters: {},
  actions: {
    getCardTable(pack: string, type: string) {
      if (type == '' && pack == '') { this.cardTable = this.cardTableData }
      else {
        this.cardTable = this.cardTableData.filter(item =>
          (item.type == type || type == '') && (item.pack == pack || pack == '')
        )
      }
    }
  }
})