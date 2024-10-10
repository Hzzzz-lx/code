import axios from "axios";
export  const request=axios.create({
    baseURL:"https://gitee.com",
    timeout:5000
})