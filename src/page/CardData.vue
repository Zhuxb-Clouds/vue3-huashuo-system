<template>
    <div class="Box">
        <div id="charts" :style="{ width: '100%', height: '100%' }"></div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';
// import { mainStore } from "../store/index";
// const store = mainStore();

onMounted(() => {
    let cardChart = echarts.init(document.getElementById('charts') as any)
    cardChart.setOption({
        title: {
            text: "卡牌统计图",
        },
        color: ['#808080'],
        tooltip: {},
        legend: {
            data: ["卡牌数量"],
        },
        xAxis: {
            data: ["江湖牌", "奇遇牌", "结局牌", "起始牌", "箴言牌", "人物牌"],
        },
        yAxis: {},
        barWidth: 20,
        barBorderRadius: 20,
        series: [
            {
                name: "卡牌类型",
                type: "bar",
                data: [86, 44, 73, 50, 50, 6],
            },


        ],
    });
    // let cardData = store.getCardData();
})

</script>

<style scoped>
.Box {
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
    background-color: rgb(255, 255, 255);
    align-items: center;
    justify-content: center;
    padding: 1%;
}
</style>