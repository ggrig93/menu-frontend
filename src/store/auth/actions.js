import api from "@/api/index";
const authActions = {
    attemptLogin({commit}, credentials) {
        api.post('/login', credentials).then(res => {
            const data = res.data.data
            commit('SET_TOKEN', data.token);
        })
    },

    logout({ commit }, token) {
        commit('LOGOUT', token);
    },
}

export default authActions