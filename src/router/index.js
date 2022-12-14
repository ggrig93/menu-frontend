import { createRouter, createWebHistory } from 'vue-router'
import MenuPage from '@/views/MenuPage'
import NotFound from "@/views/NotFound";
import LoginPage from "@/views/LoginPage";
import AddProduct from "@/views/AddProduct";
import store from "@/store";

const routes = [
    {
        path: '/',
        name: 'menuPage',
        component: MenuPage
    },
    {
        path: '/login',
        name: 'loginPage',
        component: LoginPage
    },
    {
        path: '/add/product',
        name: 'addProduct',
        component: AddProduct
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    if(store.getters["authMod/token"] || localStorage.getItem('token')) {
        if(to.path === '/login') {
            router.push("/")
        }
    }
})

export default router