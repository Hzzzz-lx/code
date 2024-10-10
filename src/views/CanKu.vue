<template>
  <a-layout-content>
    <div class="text-2xl ml-4 h-16 mt-5 bg-white">代码仓库</div>
    <hr />
    <div class="flex flex-col ml-4">
      <div class="flex flex-row items-center">
        <div @click="back" class="w-[40px] h-[40px] mr-4">
          <Icon icon="icon-park:left-c" class="w-[40px] h-[40px]" />
        </div>
        <div class="text-xl">创建代码仓库</div>
      </div>
      <div class="mt-5">所属项目</div>
      <a-input-group compact class="mt-3">
        <a-select v-model:value="value17" style="width: 30%">
          <a-select-option value="Home">Js</a-select-option>
          <a-select-option value="Company">C++</a-select-option>
        </a-select>
      </a-input-group>
      <div class="flex flex-row mt-5">
        <div class="mr-10">仓库类型</div>
        <div>仓库名称</div>
      </div>
      <a-input-group compact>
      <a-input v-model:value="value1" style="width: 7%" />
      <a-textarea v-model:value="value2" show-count :maxlength="100" style="height:20px ;"/>
    </a-input-group>
    </div>
  </a-layout-content>
</template>
<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { useRouter } from "vue-router";
import { ref } from "vue";
const value1 = ref('Git仓库');
const value2 = ref('');
const router = useRouter();
const back = () => {
  router.replace("/");
};
</script>
