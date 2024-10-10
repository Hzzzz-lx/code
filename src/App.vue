<template>
<App>
    <RouterView></RouterView>
   <ConfigProvider
    :theme="{
      token: {
        colorPrimary: '#032dec ',
      },
    }"
  >
  </ConfigProvider>
</App>
</template>
<script setup>
import { ConfigProvider, App } from 'ant-design-vue'
</script>