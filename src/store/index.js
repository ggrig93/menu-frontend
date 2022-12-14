import { createStore } from 'vuex'
import productsModule from './products/index'
import categoriesModule from "./categories/index";
import authModule from "@/store/auth";

const store = createStore({
    modules: {
        authMod: authModule,
        productsMod: productsModule,
        categoriesMod: categoriesModule,
    }
})

// export store to use in main.js
export default store