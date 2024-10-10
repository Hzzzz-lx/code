<template>
  <a-layout-content>
    <div class="text-2xl ml-4 h-16 mt-5 bg-white">代码仓库</div>
    <hr />
    <div class="flex flex-col ml-4 mt-3">
      <div class="flex flex-row items-center">
        <div @click="back" class="w-[40px] h-[40px] mr-4">
          <Icon icon="icon-park:left-c" class="w-[40px] h-[40px]" />
        </div>
        <div class="text-xl">创建代码仓库</div>
      </div>
      <div class="mt-5">所属项目</div>
      <a-input-group compact class="mt-3">
        <a-select v-model:value="value4" style="width: 30%">
          <a-select-option value="Js">Js</a-select-option>
          <a-select-option value="C++">C++</a-select-option>
        </a-select>
      </a-input-group>
      <div class="flex flex-row mt-5">
        <div class="mr-10">仓库类型</div>
        <div>仓库名称</div>
      </div>
      <a-input-group compact class="mt-3">
        <a-input v-model:value="value1" style="width: 7%" />
        <a-input
          v-model:value="value2"
          show-count
          placeholder="仓库名称支持字母，数字，下划线(_),中划线(-)和点(.)的组合"
          :maxlength="100"
          style="width: 43%; height: 30px"
        />
      </a-input-group>
      <div class="mt-5">仓库描述</div>
      <a-textarea
        class="mt-3"
        v-model:value="value3"
        placeholder="请描述仓库的描述"
        :rows="4"
        style="width: 50%"
      />
      <div class="mt-5">初始化仓库</div>
      <a-checkbox class="mt-3" v-model:checked="checked"
        >生成README文件</a-checkbox
      >
      <br />
      <a-checkbox class="mt-3" v-model:checked="checked1"
        >添加.gitignore文件</a-checkbox
      >
      <div class="mt-5">是否开源</div>
      <a-radio-group v-model:value="value" name="radioGroup">
        <a-radio class="mt-3" value="1"
          >私有仓库(仅对仓库成员可见, 仓库成员可访问仓库)</a-radio
        >
        <br />
        <a-radio class="mt-3" value="2">公开仓库</a-radio>
      </a-radio-group>
      <div class="mt-5">
        <button @click="btn" class="bg-black w-28 h-7 rounded mr-5 text-white">
          完成创建
        </button>
        <button
          @click="btn1"
          class="w-20 h-7 rounded text-black"
          style="border: 1px gray solid"
        >
          取消
        </button>
      </div>
    </div>
  </a-layout-content>
</template>
<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { message } from "ant-design-vue";

const value = ref("1");
const value1 = ref("Git仓库");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");
const checked = ref(false);
const checked1 = ref(false);
const router = useRouter();

const back = () => {
  router.replace("/");
};

const btn = () => {
  // 检查必填项
  if (!value1.value.trim()) {
    message.warning("仓库类型未填写");
    return;
  }
  if (!value2.value.trim()) {
    message.warning("仓库名称未填写");
    return;
  }
  if (!value3.value.trim()) {
    message.warning("仓库描述未填写");
    return;
  }
  if (!value4.value.trim()) {
    message.warning("所属项目未填写");
    return;
  }
  if (checked.value != true && checked1.value != true) {
    message.warning("初始化仓库未填写");
    return;
  }

  // 如果所有必填项都已填写，进行跳转
  router.replace("/home1");
};

const btn1 = () => {
  router.replace("/");
};
</script>
