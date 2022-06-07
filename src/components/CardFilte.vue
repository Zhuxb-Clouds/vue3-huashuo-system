<template>
  <div id="filterBox">
    <div class="selectBox">
      <span class="descript">卡牌类型</span>
      <el-select v-model="type" class="m-2" placeholder="Select" size="large" @change="search">
        <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div class="selectBox">
      <span class="descript">从属包</span>
      <el-select v-model="pack" class="m-2" placeholder="Select" size="large" @change="search">
        <el-option v-for="item in packOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const type = ref('')
const pack = ref('')

const typeOptions= [{
  label: "江湖卡",
  value: "江湖卡"
}, {
  label: "起始卡",
  value: "起始卡"
}, {
  label: "结局卡",
  value: "结局卡"
}, {
  label: "奇遇卡",
  value: "奇遇卡"
}, {
  label: "箴言卡",
  value: "箴言卡"
}]
const packOptions = [{
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
}]

function search() {
  return console.log(type.value + ' ' + pack.value);
}
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