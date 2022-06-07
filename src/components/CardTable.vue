<template>
    <CardFilte />
    <div id="tableBox">
        <el-table :data="cardTableData" stripe style="width: 100%" height="100%" table-layout="auto">
            <el-table-column type="selection" />
            <el-table-column prop="id" label="卡牌编号" />
            <el-table-column prop="font" label="卡牌名称" />
            <el-table-column prop="back" label="卡牌描述" />
            <el-table-column prop="type" label="卡牌类型" />
            <el-table-column prop="pack" label="从属包" />
        </el-table>
    </div>
</template>

<script setup lang="ts">
import CardFilte from "./CardFilte.vue";
import { mainStore } from "../store/index";
import { storeToRefs } from 'pinia';
const store = mainStore();
const { cardTableData } = storeToRefs(store);

</script>

<style scoped>
#tableBox {
    height: 90vh;
    background-color: white;
    margin: 1%;
    margin-right: 1%;
    padding: 2%;
    padding-left: 3%;
    border-radius: 10px;
    box-shadow: 5px 5px 10px 1px rgba(32, 32, 32, 0.11);
}
</style>