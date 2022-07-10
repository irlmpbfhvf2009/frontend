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

// 登出
export function memberInfo(data) {
    return request({
        url: `/user/memberInfo`,
        method: "post",
        data,
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
// 我的好友
export function myFriend(data) {
    return request({
        url: `/user/myFriend`,
        method: "post",
        data,
    });
}

// 上傳檔案
export function uploadFileRequest (url, params) {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
