<template>
  <a-layout-content>
    <div class="text-2xl ml-3 h-16 mt-5 bg-white">代码仓库</div>
    <hr />
    <div :style="{ padding: '24px', background: '#fff' }" class="flex">
      <div class="flex justify-between w-full">
        <div class="flex">
          <div @click="onView" class="mr-5 text-gray-500">最近访问</div>
          <div @click="onView1" class="mr-5 text-blue-600">全部仓库</div>
          <div @click="onView2" class="mr-5 text-gray-500">开源仓库</div>
        </div>
        <div>
          <button @click="btn" class="mr-10 bg-black w-28 h-7 rounded text-white">
            创建代码仓库
          </button>
        </div>
      </div>
    </div>
    <hr />
  </a-layout-content>
  <div class="flex justify-center items-center mt-20 flex-col" v-if="!dataCanku.length">
    <div class="text-xl">欢迎使用代码仓库</div class="text-xl">
    <div class="text-xs text-gray-400 mt-3">代码仓库用于托管基于GIT或SVN管理的代码库。通过Review合并请求来审查代码变更</div>
    <div class="text-xs text-gray-400 mt-3">版本发布可以用来标记，发布代码版本</div>
    <div class="flex flex-row mt-10">
      <div class="flex flex-col justify-center items-center w-[200px] h-[200px]">
      <img src="@/images/4.png" class="w-[100px] h-[100px]" />
      <div>创建代码仓库</div>
      <div class="text-xs text-gray-400 mt-3">浏览，编辑代码以及查看代码提交</div>
      <div class="text-xs text-gray-400 mt-3">记录</div>
    </div>
    <div class="flex flex-col justify-center items-center w-[200px] h-[200px]">
      <img src="@/images/4.png" class="w-[100px] h-[100px]" />
      <div>合并请求</div>
      <div class="text-xs text-gray-400 mt-3">发起合并请求并邀请协作者</div>
      <div class="text-xs text-gray-400 mt-3">Review变更内容</div>
    </div>
    <div class="flex flex-col justify-center items-center w-[200px] h-[200px]">
      <img src="@/images/4.png" class="w-[100px] h-[100px]" />
      <div>代码版本</div>
      <div class="text-xs text-gray-400 mt-3">发布，标记代码版本</div>
    </div>
    </div>
    <button @click="btn" class="mt-10 bg-black w-28 h-7 rounded text-white">
            创建代码仓库
          </button>
  </div>
  <div v-if="dataCanku.length">
<div  class="flex items-center h-[50px] flex-row">
<div class="text-gray-500 mr-40 ml-5">仓库创建者</div>
<div class="text-gray-500 mr-52">仓库名称</div>
<div class="text-gray-500 mr-64">仓库描述</div>
<div class="text-gray-500 mr-64">最近一次推送时间</div>
</div>
  <hr>
  <div v-for="(item,index) in dataCanku" :key="index">
    <div class="flex items-center h-[70px] flex-row">
    <div class="text-gray-500  w-56 ml-5">{{ item.project_creator }}</div>
<div class="text-gray-500 w-64">{{ item.name }}</div>
<div class="text-gray-500 w-[325px]">{{ item.description }}</div>
<div class="text-gray-500 ">{{ item.updated_at }}</div>
    </div>
  </div>
</div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { onMounted } from 'vue'
import { getKu } from "@/service/api";
import to from "await-to-js";
import { ref, computed } from "vue";
const router = useRouter();
const dataCanku =ref([])
const getHandle = async () => {
  const getData = {
access_token:'0fce86bda8aea349c083e5bbf501ffff',
  };
  const [err, res] = await to(getKu(getData));
 dataCanku.value= res.data
}
onMounted(getHandle);
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
