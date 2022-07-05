import { createStore } from 'vuex'

export default createStore({
    state: {
        user:localStorage.getItem("user")||{},
    },
    getters: {
    },
    mutations: {
        setUser(state, user) {
            var arr = [];
            arr.push(user.id,user.email,user.username);
            var jsonUser = JSON.stringify(arr);
            localStorage.setItem("user", jsonUser);
            state.user=jsonUser;
        },
    },
    actions: {
    },
    modules: {
    }
})