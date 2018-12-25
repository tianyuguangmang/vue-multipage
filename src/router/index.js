/**
 * 该路由只在开发时启用，
 * 当build时，并不会将路由打包进去
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


const cart = ()=>import("pages/cart/cart.vue")
const index = ()=>import("pages/index/index.vue")
Vue.use(VueRouter)

const baseUrl = ""
//配置path时，则直接配置pages下页面路径作为路由，以解决打包之后多页面跳转问题
const routes = [{
  path: baseUrl+'/index/index.html',
  name: 'index',
  meta:"首页",
  component: index
},{
    path: baseUrl+'/cart/cart.html',
    name: 'cart',
    meta:"购物车",
    component: cart
}]

const router = new VueRouter({
  routes,
 // mode: 'history', //default: hash ,history
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
// 全局路由配置
// 路由开始之前的操作
/*router.beforeEach((to, from, next) => {
  NProgress.done().start()
  if(to.path == from.path && to.path=='/merchant/order/list'){
    return;
  }
  if(store.getters.get_user_info != null 
    || to.path == "/mcht/register"||to.path == "/mcht/resetpsd"|| to.path == "/admin/login"|| to.path == "/merchant"){
    next();
  }else{
    next({
      path:"/merchant"
    })
  }
})*/

router.afterEach(route => {
})

export default router
