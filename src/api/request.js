import axios from "axios";

// 創建axios實例
const api =  process.env.VUE_APP_BASE_API;
const service = axios.create({
    baseURL: api /* api 域名 */,
    /* headers: { 'Content-Type': 'application/json' }, */
    timeout: 8000 /* api響應時間 */,
    withCredentials : false
});

// 請求攔截器
service.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        !token ? delete config.headers.Authorization : (config.headers.Authorization = 'Bearer '+token);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default service;