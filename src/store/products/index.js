import productGetters   from './getters'
import productActions   from './actions'
import productMutations from './mutations'

const productsModule = {
    namespaced: true,
    state() {
        return {
            products: '',
            product: ''
        }
    },
    getters:   productGetters,
    actions:   productActions,
    mutations: productMutations
}

export default productsModule