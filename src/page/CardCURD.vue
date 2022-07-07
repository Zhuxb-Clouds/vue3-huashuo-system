<template>
  <div class="back" @click="router.push({ path: '/home' })" style="cursor: pointer;"> <svg t="1657163425040"
      class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2323" width="200"
      height="200">
      <path
        d="M395.21518 513.604544l323.135538-312.373427c19.052938-18.416442 19.052938-48.273447 0-66.660212-19.053961-18.416442-49.910737-18.416442-68.964698 0L291.75176 480.290811c-19.052938 18.416442-19.052938 48.273447 0 66.660212l357.633237 345.688183c9.525957 9.207709 22.01234 13.796214 34.497699 13.796214 12.485359 0 24.971741-4.588505 34.466999-13.82896 19.052938-18.416442 19.052938-48.242747 0-66.660212L395.21518 513.604544z"
        p-id="2324"></path>
    </svg>
    后退</div>
  <CardFilte />
  <CardTable />
</template>

<script setup lang="ts">
import CardTable from "../components/CardTable.vue";
import CardFilte from "../components/CardFilte.vue";
import router from '../route/index'


</script>

<style scoped>
svg {
  width: 25%;
  height: 50%;
}

.back {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5vw;
  height: 2vw;
  background-color: white;
  margin: 1%;
  /* margin-right: 1%; */
  /* padding: 2%; */
  /* padding-left: 3%; */
  border-radius: 10px;
  box-shadow: 5px 5px 10px 1px rgba(32, 32, 32, 0.11);
}
</style>