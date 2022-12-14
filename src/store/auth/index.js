import authGetters from "./getters";
import authActions from "./actions";
import authMutations from "./mutations";

const authModule = {
    namespaced: true,
    state() {
        return {
            is_logged_in: false,
            token: null,
        }
    },
    getters:   authGetters,
    actions:   authActions,
    mutations: authMutations
}

export default authModule