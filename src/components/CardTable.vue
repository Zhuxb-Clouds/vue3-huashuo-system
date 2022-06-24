<template>
    <div>
        <CardFilte />
        <el-dialog v-model="dialogVisible" title="新增卡牌" width="20%" :before-close="handleClose">
            <el-form label-position="right" label-width="20%">
                <el-form-item label="卡牌类型">
                    <el-select v-model="form.type" placeholder="请选择卡牌类型">
                        <el-option v-for="item in typeOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="从属包">
                    <el-select v-model="form.pack" placeholder="请选择卡牌从属包">
                        <el-option v-for="item in packOptions" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="卡牌名">
                    <el-input v-model="form.front" />
                </el-form-item>
                <el-form-item label="卡牌描述">
                    <el-input v-model="form.back" type="textarea" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="handleConfirm">确认</el-button>
                    <el-button @click="handleClose">取消</el-button>
                </span>
            </template>
        </el-dialog>
        <div id="tableBox">
            <el-container>
                <el-header>
                    <el-col :span="4">
                        <el-button id="addBtn" @click="toTonfigure">新增</el-button>
                        <el-button type="danger" id="addBtn">删除</el-button>
                    </el-col>
                </el-header>
                <el-main>
                    <el-table :data="cardTable" stripe style="width: 100%" height="100%" table-layout="auto">
                        <el-table-column type="selection" />
                        <el-table-column prop="id" label="卡牌编号" />
                        <el-table-column prop="front" label="卡牌名称" />
                        <el-table-column prop="back" label="卡牌描述" />
                        <el-table-column prop="type" label="卡牌类型" />
                        <el-table-column prop="pack" label="从属包" />
                        <el-table-column label="操作">
                            <el-button size="small">编辑</el-button>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script setup lang="ts">
// import CardFilte from "./CardFilte.vue";
import { reactive, ref } from 'vue'
import { mainStore } from "../store/index";
import { storeToRefs } from 'pinia';
const store = mainStore();
const { cardTable, typeOptions, packOptions } = storeToRefs(store);
const dialogVisible = ref(false)
const form = reactive({
    type: '',
    pack: '',
    front: '',
    back: '',
})

const handleClose = (done: () => void) => {
    dialogVisible.value = false;
    done()
}
const handleConfirm = () => {
    dialogVisible.value = false;
    // emit('close',false)
}
const toTonfigure = function () {
    dialogVisible.value = true;

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