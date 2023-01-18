import http from '../utils/http/http.js'

const register = (data) => {
    return http.post("/user/register", data);
}
const login = (data) => {
    return http.post("/user/login", data);
}
const memberInfo = (data) => {
    return http.post("/user/memberInfo",data)
}
export default {
    register, login,memberInfo
}