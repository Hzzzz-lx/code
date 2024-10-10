import { createApp } from 'vue'
// import './style.css'
import "tailwindcss/tailwind.css";
import "ant-design-vue/dist/reset.css";
import { Icon } from "@iconify/vue";
import Antd from "ant-design-vue";
import App from './App.vue'
import router from './router'
createApp(App).use(Antd).use(Icon).use(router).mount("#app");
