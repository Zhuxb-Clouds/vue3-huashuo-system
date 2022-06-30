<template>
  <div id="filterBox">
    <div class="selectBox">
      <span class="descript">卡牌类型</span>
      <el-select v-model="type" class="m-2" placeholder="请选择卡牌类型" size="large" @change="search" clearable>
        <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div class="selectBox">
      <span class="descript">从属包</span>
      <el-select v-model="pack" class="m-2" placeholder="请选择包从属" size="large" clearable @change="search">
        <el-option v-for="item in packOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { mainStore } from "../store/";
import { storeToRefs } from 'pinia';

const type = ref();
const pack = ref();
const store = mainStore();
const { typeOptions, packOptions } = storeToRefs(store);
//调用piniaActions搜索
function search() {
  store.search(type.value, pack.value);
  store.getCard()
}

onMounted(() => {
  store.getOption()
  search()

})


</script>

<style scoped>
#filterBox {
  height: 100%;
  background-color: white;
  margin: 1%;
  margin-right: 1%;
  padding: 2%;
  padding-left: 3%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 1px rgba(32, 32, 32, 0.11);
  display: flex;
  flex-direction: row;
}

.selectBox {
  width: 20em;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.descript {
  display: block;
  margin-right: 5%;
}
</style>