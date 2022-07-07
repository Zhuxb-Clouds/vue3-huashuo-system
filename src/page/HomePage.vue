<template>
    <div class="homebox">
        <div class="title"><span>
                话说卡牌管理系统
            </span></div>
        <div class="welcome" v-if="!!token()">
            欢迎您，{{ MyName }}
            <div class="select">
                <div class="cardBox" @click="router.push({ path: '/cardtable' })">卡牌管理</div>
                <div class="cardBox" @click="router.push({ path: '/carddata' })">卡牌数据</div>
            </div>
            <div class="exit" @click="exit()">退出登录</div>
        </div>
        <div class="login" @click="router.push({ path: '/Login' })" v-if="!token()" style="cursor: pointer">
            请登录
        </div>
    </div>
    <FooterFav />

</template>

<script setup lang="ts">
import api from '../api/login'
import router from '../route/index'
import FooterFav from "../components/FooterView.vue";
import { ref } from 'vue';
async function token() {
    if (localStorage.getItem("token")) {
        const user = await api.whoami();
        MyName.value = user;
    }
    else { return false }
}
function exit() {
    localStorage.removeItem("token");
    router.push({ path: '/Login' });
}
let MyName = ref("")
</script>

<style scoped>
.homebox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;

}

.title {
    font-size: 50px;
    font-weight: 600;

}

.welcome,
.login {
    margin: 2%;
    font-size: 25px;
    font-style: italic;
}

.select {
    display: flex;
    flex-direction: row;
    font-size: 20px;
    font-style: normal;
}

.cardBox {
    display: absolute;
    align-items: center;
    justify-content: center;
    margin: 3%;
    width: 25vh;
    border-radius: 5px;
    border: 2px solid #ccc;
    padding: 2px;
    cursor: pointer;
}

.exit {
    font-size: 18px;
    font-style: normal;
    cursor: pointer;
}
</style>