import { createStore } from 'vuex'

export default createStore({
    state: {
        user:JSON.parse(localStorage.getItem("user"))||{},
    },
    getters: {
    },
    mutations: {
        setUser(state, user) {
            console.log("store user : ",user)
            state.user=user;
            localStorage.setItem("user",JSON.stringify(user))
        },
    },
    actions: {
    },
    modules: {
    }
})