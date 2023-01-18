import http from '../utils/http/http.js'

const login = (data) => {
    return http.post("/admin/login",data);
}
const getUserList = (data) => {
    return http.get("/admin/list",data);
}
const saveUser = (data) => {
    return http.post("/admin/save",data);
}
const delUser=(data) => {
    return http.del("/admin/delete",data);
}
const getUserDetail = (data) => {
    return http.get("/admin/detail",data);
}
export default {
    login,getUserList,saveUser,delUser,getUserDetail
}