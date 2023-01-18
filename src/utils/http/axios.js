import axios from "axios";
import { ElMain, ElMessage } from 'element-plus'

const instance = axios.create({
    baseURL: "/api",
    timeout: 50000,
})
instance.interceptors.request.use(
    config => {
        let token = sessionStorage.getItem('token')
        if (token) {
            config.headers['token'] = token
        }
        return config
    },
    error => {

    }
);
instance.interceptors.response.use(
    res => {
        return res;
    },
    error => {
        if (error && error.response) {
            const status = error.response.status
            switch (status) {
                case 400:
                    ElMessage.error("400")
                    break;
                case 401:
                    ElMessage.error("401")
                    break;
                case 403:
                    ElMessage.error("403")
                    break;
                case 404:
                    ElMessage.error("404")
                    break;
                case 408:
                    ElMessage.error("408")
                    break;
                case 500:
                    ElMessage.error("500")
                    break;
                case 501:
                    ElMessage.error("501")
                    break;
                case 502:
                    ElMessage.error("502")
                    break;
                case 503:
                    ElMessage.error("503")
                    break;
                case 504:
                    ElMessage.error("網絡超時")
                    break;
                case 505:
                    ElMessage.error("HTTP版本不支持該請求")
                    break;
                default:
                    ElMessage.error("請求失敗")
            }
        } else {
            if (JSON.stringify(error).includes("timeout")) {
                ElMessage.error("服務器響應超時，請刷新頁面")
            }
            ElMessage.error("連接服務器失敗")
        }
        return Promise.reject(error);
    }
);
export default instance;