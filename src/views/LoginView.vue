<template>
  <div class="flex items-center">
    <div class="w-[40vw] h-[100vh]">
      <Carousel autoplay>
        <div><img src="@/images/5.png" class="w-[40vw] h-[100vh]" /></div>
        <div><img src="@/images/6.png" class="w-[40vw] h-[100vh]" /></div>
        <div><img src="@/images/7.png" class="w-[40vw] h-[100vh]" /></div>
      </Carousel>
    </div>
    <div class="w-[60vw] h-[100vh] flex justify-center items-center bg-white">
      <div class="w-[500px] flex flex-col justify-center items-center">
        <h1 class="text-[35px] mb-[60px] text-black">登录，即刻创造你的应用</h1>
        <Space class="w-full" size="large" direction="vertical">
          <Input
            class="w-full h-[60px]"
            size="large"
            v-model:value="useLoginInfo.username"
            placeholder="请输入邮箱"
          />
          <Input.Password
            class="h-[60px]"
            size="large"
            v-model:value.lazy="useLoginInfo.password"
            autofocus
            placeholder="请输入密码"
          />
        </Space>
        <div class="w-full my-[10px]">
          <Radio v-model:checked="checked" class="text-gray-500"
            >我已阅读并同意<Button type="link">《服务协议》</Button> 和<Button
              type="link"
              >《隐私政策》</Button
            >
          </Radio>
        </div>

        <Button
          @click="loginHandle"
          class="w-full mt-[30px] h-[60px]"
          type="primary"
          >登 录</Button
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Button, Carousel, Space, Input, Radio, App } from "ant-design-vue";
import { getData } from "@/service/api";
import to from "await-to-js";
import { useRouter } from "vue-router";
const router = useRouter()
const { notification } = App.useApp();
const useLoginInfo = ref({
  username: "2901513276@qq.com",
  password: "He040805",
});
const loginHandle = async () => {
  const loginData = {
    grant_type: "password",
    username: useLoginInfo.value.username,
    password: useLoginInfo.value.password,
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
    scope: import.meta.env.VITE_CLIENT_SCOPE,
  };
  const [err, res] = await to(getData(loginData));
  if (!err) notification.success({ message: "登录成功" });
router.replace('/home')
};
</script>
