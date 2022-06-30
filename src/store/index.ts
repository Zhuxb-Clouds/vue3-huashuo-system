import { defineStore } from 'pinia';
import Api from "../api/card";
import { queryType, optionType, cardType } from "../type/index";

export const mainStore = defineStore('main', {
  state: () => {
    return {
      typeOptions: <optionType[]>[],
      packOptions: <optionType[]>[],
      cardTableData: <cardType[]>[],
      searchQuery: <queryType>{},
      cardTableDataTotal: 309,
      pageSize: 15,
      page: 1,
    }
  },
  getters: {},
  actions: {
    async getOption() {
      this.typeOptions = await Api.getType()
      this.packOptions = await Api.getPack()
    },
    async addCard(form: cardType) {
      // 传入json格式的form，包含type, pack, front, back,四个元素，改变cardTableData并调用getCardTable
      await Api.addCard(form)
      this.getCard()
    },
    // getCardById(id: number) { return this.cardTableData.filter(o => o.id == id)[0] },
    async editCard(form: cardType) {
      // console.log('form', form)
      await Api.editCard(form)
      this.getCard()

    },
    async getCardById(id: number): Promise<cardType> {
      return await Api.getCardById(id)
    },
    deleteCard(idArr: (number | undefined)[]) {
      for (let i = 0; i < idArr.length; i++) {
        this.deleteCardById(idArr[i] ?? 0)
      }
      setTimeout(() => {
        this.getCard()
      }, 0);

    },
    async deleteCardById(id: number) {
      return await Api.delCard(id)
    },
    async getCard(query?: queryType) {
      const res = await Api.getCard({ ...query, ...this.searchQuery, page: this.page }) as any;
      this.cardTableData = res.rows;
      this.cardTableDataTotal = res.count;
    },
    search(type: number, pack: number) { this.searchQuery = { type: type, pack: pack } },
    pageChange(page: number) { this.page = page },
  }
})