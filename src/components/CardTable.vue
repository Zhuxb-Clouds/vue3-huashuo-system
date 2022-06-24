<template>
    <div>
        <CardFilte />
        <CardPopup :IsShow="dialogVisible" :cardId="cardId" @closePopup="closePopup" />
        <div id="tableBox">
            <el-container>
                <el-header>
                    <el-col :span="4">
                        <el-button id="addBtn" @click="openPopup">新增</el-button>
                        <el-button type="danger" id="addBtn">删除</el-button>
                    </el-col>
                </el-header>
                <el-main>
                    <el-table :data="cardTable" stripe style="width: 100% ;height: 200%" table-layout="auto">
                        <el-table-column type="selection" />
                        <el-table-column prop="id" label="卡牌编号" />
                        <el-table-column prop="front" label="卡牌名称" />
                        <el-table-column prop="back" label="卡牌描述" />
                        <el-table-column prop="type" label="卡牌类型" />
                        <el-table-column prop="pack" label="从属包" />
                        <el-table-column label="操作">
                            <template #default="{ row }">
                                <el-button size="small" @click="handleEdit(row.id)">编辑</el-button>
                            </template>

                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script setup lang="ts">
// import CardFilte from "./CardFilte.vue";
import CardPopup from "./CardPopup.vue";
import { ref } from 'vue'
import { mainStore } from "../store/index";
import { storeToRefs } from 'pinia';

const cardId = ref()

const store = mainStore();
const { cardTable } = storeToRefs(store);
const dialogVisible = ref(false);


const openPopup = () => dialogVisible.value = true;
const closePopup = () => dialogVisible.value = false;

// 编辑handle函数
const handleEdit = function (rowId: number) {
    console.log('rowId',rowId)
    // 传入id ,获取id对应的卡牌信息,再prop入弹窗子组件。
    cardId.value = rowId
    console.log('cardId.value',cardId.value)
    openPopup()
}
</script>

<style scoped>
.dialog-footer button:first-child {
    margin-right: 10px;
}

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