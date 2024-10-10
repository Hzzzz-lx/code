<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a-layout has-sider>
    <a-layout-sider
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }"
    >
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span class="nav-text">工作台</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">项目</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">AI</span>
        </a-menu-item>
        <a-menu-item key="4">
          <bar-chart-outlined />
          <span class="nav-text">事项</span>
        </a-menu-item>
        <a-menu-item key="5">
          <cloud-outlined />
          <span class="nav-text">代码</span>
        </a-menu-item>
        <a-menu-item key="6">
          <appstore-outlined />
          <span class="nav-text">制品</span>
        </a-menu-item>
        <a-menu-item key="7">
          <team-outlined />
          <span class="nav-text">洞察</span>
        </a-menu-item>
        <a-menu-item key="8">
          <shop-outlined />
          <span class="nav-text">知识</span>
        </a-menu-item>
        <a-menu-item key="9">
          <shop-outlined />
          <span class="nav-text">自动化</span>
        </a-menu-item>
        <a-menu-item key="10">
          <shop-outlined />
          <span class="nav-text"
            ><Icon icon="lsicon:user-all-filled" style="color: white"
          /></span>
        </a-menu-item>
        <a-menu-item key="11">
          <shop-outlined />
          <span class="nav-text" @click="showDrawer">
            <Icon icon="ph:dots-nine" style="color: white"
          /></span>
        </a-menu-item>
        <a-menu-item key="12">
          <shop-outlined />
          <span class="nav-text"
            ><Icon icon="mdi:bell" style="color: white"
          /></span>
        </a-menu-item>
        <a-menu-item key="13">
          <shop-outlined />
          <span class="nav-text"
            ><Icon icon="mingcute:settings-5-line" style="color: white"
          /></span>
        </a-menu-item>
        <a-menu-item key="14">
          <shop-outlined />
          <span class="nav-text"
            ><Icon icon="mingcute:question-line" style="color: white"
          /></span>
        </a-menu-item>
        <a-menu-item key="15">
          <shop-outlined />
          <span class="nav-text"
            ><Icon icon="solar:user-bold" style="color: white"
          /></span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-drawer
      v-model:open="open"
      width="300px"
      :drawer-style="{ backgroundColor: '#001529', right: '200px' }"
      class="custom-class"
      root-class-name="root-class-name"
      :root-style="{ color: 'blue' }"
      style="color: white"
      placement="right"
      :mask="false"
      :closable="false"
      @after-open-change="afterOpenChange"
    >
      <template #title>
        <span style="color: white">Basic Drawer</span>
      </template>
      <div class="flex items-center mb-4">
        <Icon icon="mingcute:user-1-line" style="color: white" class="mr-3" />
        <div class="text-base">个人账户设置</div>
      </div>
      <div class="flex items-center mb-4">
        <Icon icon="tdesign:cart" style="color: white" class="mr-3" />
        <div class="text-base">服务订购</div>
      </div>
      <div class="flex items-center mb-4">
        <Icon icon="tdesign:member" style="color: white" class="mr-3" />
        <div class="text-base">邀请成员</div>
      </div>
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <Icon icon="solar:global-linear" style="color: white" class="mr-3" />
          <div class="text-base">切换语言</div>
        </div>
        <div class="text-gray-500 mr-5">简体中文</div>
      </div>
      <div class="flex items-center mb-4">
        <Icon icon="lsicon:order-outline" style="color: white" class="mr-3" />
        <div class="text-base">工作中心</div>
      </div>
      <div class="flex items-center mb-4">
        <Icon icon="icon-park-outline:log" style="color: white" class="mr-3" />
        <div class="text-base">更新日志</div>
      </div>
      <div class="flex items-center mb-4">
        <Icon icon="ion:exit-outline" style="color: white" class="mr-3" />
        <div class="text-base">退出</div>
      </div>
    </a-drawer>
    <a-layout class="bg-white" :style="{ marginLeft: '200px' }">
      <RouterView></RouterView>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue/dist/iconify.js";

const open = ref(false);
const afterOpenChange = (bool) => {
  console.log("open", bool);
};

const showDrawer = () => {
  open.value = !open.value; // 切换抽屉的打开状态
};
const selectedKeys = ref(["5"]);
</script>
<style scoped>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
