import api from "@/api/index";
const categoryActions = {
    getCategories({commit}){
        api.get('/categories').then(response => {
            commit('SET_CATEGORIES', response.data);
        })
    },

    // async getCategory({commit}, id){
    //     api.get('/categories/${id}').then(response => {
    //         commit('SET_CATEGORY', response.data);
    //     })
    // }
}

export default categoryActions