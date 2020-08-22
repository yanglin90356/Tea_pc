import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    name: 'Index/:pid',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
  },
  {
    path: '/product/:kw',
    component: () => import('../views/product.vue'), props: true
  },
  {
    path: '/login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/register',
    component: () => import('../views/register.vue')
  }, {
    path: '/details/:pid',
    props: true,
    component: () => import('../views/details.vue')
  }, {
    path:'/shoppcart',
    component:()=>import('../views/shoppingCart.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
