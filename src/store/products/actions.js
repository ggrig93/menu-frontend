import api from "@/api/index";
const productActions = {
    getProducts({commit}){
        api.get('/products').then(response => {
            commit('SET_PRODUCTS', response.data);
        })
    },

    createProduct({commit}, data){
        api.post('/products', data, {
            headers: {'Content-Type' : 'multipart/form-data'}
        }).then(response => {
            commit('SET_PRODUCT', response.data);
        }).catch(err=>{
            console.log(err)
        })
    },

    updateProduct({commit}, {data, id}){
        api.patch(`/products/`+ id, data, {
            headers: {'Content-Type' : 'multipart/form-data'}}).then(response => {
            commit('SET_PRODUCT', response.data);
        }).catch(err=>{
            console.log(err)
        })
    },

    removeProduct({commit}, id){
        api.delete(`/products/`+id).then(response => {
            commit('SET_PRODUCT', response.data);
        })
    }
}

export default productActions