<template>
  <a-layout-content>
    <div class="text-2xl ml-3 h-16 mt-5 bg-white">代码仓库</div>
    <hr />
    <div :style="{ padding: '24px', background: '#fff' }" class="flex">
      <div class="flex">
        <div @click="onView" class="mr-5 text-gray-700">最近访问</div>
        <div @click="onView1" class="mr-5 text-gray-700">全部仓库</div>
        <div @click="onView2" class="mr-5 text-blue-600">开源仓库</div>
      </div>
    </div>
    <hr />
  </a-layout-content>
  开源仓库
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const onView = () => {
  router.replace("/home");
};
const onView1 = () => {
  router.replace("/home1");
};
const onView2 = () => {
  router.replace("/home2");
};
</script>
