const env = import.meta.env.MODE;
//import global from "@/composition/global";
//import router from "../router";
/* 根據域名判斷api的域名要用哪個 */
let api = "";
(function (env) {
    if (env === "prod") {
        api = "https://limitless-hamlet.herokuapp.com/";
    } else {
        api = process.env.VUE
    }
})(env);

// 創建axios實例
const service = axios.create({
    baseURL: api /* api 域名 */,
    timeout: 8000 /* api響應時間 */,
});
// 請求攔截器
service.interceptors.request.use(
    config => {
        const token = localStorage.getItem("userToken");
        !token ? delete config.headers.Authorization : (config.headers.Authorization = token);
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default service;