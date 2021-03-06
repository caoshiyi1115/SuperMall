import Vue from 'vue'
import VueRouter from 'vue-router'

//通过懒加载导入
const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const Cart = () => import('@/views/cart/Cart.vue')
const Profile = () => import('@/views/profile/Profile.vue')

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
    //配置映射关系
    {
        path:'',
        redirect:'./home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    },
]

const router = new VueRouter({
    routes,
    mode:'history',
})

//3.导出
export default router
