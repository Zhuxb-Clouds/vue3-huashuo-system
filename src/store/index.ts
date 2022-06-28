import { defineStore } from 'pinia';
import { cardDetal } from "../type/index.js";
import cardApi from "../api/card";
import { queryType } from "../type/index";

export const mainStore = defineStore('main', {
  state: () => {
    return {
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
      cardTableData: [{}]
    }
  },
  getters: {},
  actions: {
    // getCardTable(pack: string, type: string) {
    //   if (type == "" && pack == "") { this.cardTable = this.cardTableData }
    //   else {
    //     this.cardTable = this.cardTableData.filter(item =>
    //       (item.type == type || type == '') && (item.pack == pack || pack == '')
    //     )
    //   }
    // },
    addCard(form: cardDetal) {
      // 传入json格式的form，包含type, pack, front, back,四个元素，改变cardTableData并调用getCardTable
      this.cardTableData.push({ id: this.cardTableData.length + 1, ...form })
      // this.getCardTable("", "")
    },
    // getCardById(id: number) { return this.cardTableData.filter(o => o.id == id)[0] },
    editCard(id: number, form: cardDetal) {
      // do noting
      // this.cardTableData.forEach((item, index, arr) => { if (item.id == id) { arr[index] = { id: id, ...form } } })
      // this.getCardTable("", "")
      // console.log('this.cardTableData',this.cardTableData)
      // console.log('this.cardTable',this.cardTable)
    },
    deleteCardById(id: number) {
      //do noting
      // this.cardTableData.forEach((o, i, a) => { if (o.id == id) { a.splice(i, 1) } })
    },
    deleteCard(idArr: (number | undefined)[]) {
      //do noting
      // for (let i = 0; i < idArr.length; i++) {
      //   this.deleteCardById(idArr[i] ?? 0)
      // }
    },
    async getCard(query: queryType) { this.cardTableData = await cardApi.getCard(query) }
  }
})