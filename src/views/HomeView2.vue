<template>
  <a-layout-content>
    <div class="text-2xl ml-3 h-16 mt-5 bg-white">代码仓库</div>
    <hr />
    <div :style="{ padding: '24px', background: '#fff' }" class="flex">
      <div class="flex justify-between w-full">
        <div class="flex">
          <div @click="onView" class="mr-5 text-gray-500">最近访问</div>
          <div @click="onView1" class="mr-5 text-gray-500">全部仓库</div>
          <div @click="onView2" class="mr-5 text-blue-600">开源仓库</div>
        </div>
        <div>
          <button @click="btn" class="mr-10 bg-black w-28 h-7 rounded text-white">创建代码仓库</button>
        </div>
      </div>
    </div>
    <hr />
  </a-layout-content>
 <div class="flex justify-center items-center mt-20 flex-col">
    <img src="@/images/4.png" class="w-[100px] h-[100px]">
    <span>暂无数据</span>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const btn = ()=>{
   router.replace("/canku");
}
const onView = () => {
  router.replace("/");
};
const onView1 = () => {
  router.replace("/home1");
};
const onView2 = () => {
  router.replace("/home2");
};
</script>
