import request from "@/api/request";

// 註冊
export function register(data) {
    return request({
        url: `/user/register`,
        method: "post",
        data,
    });
}

// 登入
export function login(data) {
    return request({
        url: `/user/login`,
        method: "post",
        data,
    });
}

// 登出
export function logout() {
    return request({
        url: `/user/logout`,
        method: "post",
    });
}
// 新增好友
export function addFriend(data) {
    return request({
        url: `/user/addFriend`,
        method: "post",
        data,
    });
}