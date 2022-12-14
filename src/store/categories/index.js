import categoryGetters   from './getters'
import categoryActions   from './actions'
import categoryMutations from './mutations'

const categoriesModule = {
    namespaced: true,
    state() {
        return {
            categories: [],
            category: ''
        }
    },
    getters:   categoryGetters,
    actions:   categoryActions,
    mutations: categoryMutations
}

export default categoriesModule