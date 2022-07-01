<template>
    <div id="Login">
        <div class="box">
            <div class="boxTitle">请登陆</div>
            <div class="loginForm">
                <input type="text" placeholder="请输入账号名" v-model="account" />
                <input type="password" placeholder="请输入密码" v-model="password" v-on:keypress.enter="checkLogin" />
                <button id="LoginBtn" @click="checkLogin">登录</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import api from '../api/login'

const router = useRouter()

// const route = useRoute()

let account = ref("")
let password = ref("")
async function checkLogin() {
    const token = await api.Login({ username: account.value, password: password.value })
    if (token) {
        // console.log("通过验证", router);
        localStorage.setItem("token", token)
        router.push({ name: 'cardtable' });
    } else {
        ElMessage.error({
            message: h('p', null, [
                h('span', { style: 'color: black;  font-family: "Noto Serif SC", serif;' }, '登录失败'),
            ]),
        })
    }
}
if (localStorage.getItem('token') != null) {
    router.push({ name: 'cardtable' });
}

</script >

<style scoped>
#Login {
    padding: 0px;
    margin: 0px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: hidden;
    display: block;
    background: url("../assets/cover.webp") no-repeat top left/ 60%,
        url("../assets/Logo.webp") no-repeat 120% 30% / 45%;
    background-attachment: fixed;
    /* background-color: rgb(240, 240, 240); */
    font-family: "Noto Serif SC", serif;
}

.box {
    animation-duration: 1s;
    animation-name: slidein;
    height: 20rem;
    width: 30rem;
    border-radius: 2vh;
    box-shadow: 5px 5px 10px 1px rgba(32, 32, 32, 0.247);
    position: absolute;
    left: 40%;
    top: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url("../assets/飞雪logo.webp") no-repeat bottom right/ 40% rgb(255, 255, 255);
}

.boxTitle {
    margin: 5%;
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 10px;
}

.loginForm {
    display: flex;
    letter-spacing: 10px;
    flex-direction: column;
    align-items: left;
}

input {
    margin-bottom: 5%;
    height: 2em;
    width: 20em;
    border: none;
    border-bottom: 1px solid #d7d8d9;
}

input:focus-visible {
    outline: 0;
    border: none;
    border-bottom: 1px solid #3d3d3d;
}

#LoginBtn {
    margin-top: 1em;
    height: 2em;
    width: 100%;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.829);
    color: white;
    font-weight: bold;
    font-family: "Noto Serif SC", serif;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

@keyframes slidein {
    from {
        margin-top: 10%;
        opacity: 0;
    }

    to {
        margin-top: 0%;

        opacity: 1;
    }
}
</style>