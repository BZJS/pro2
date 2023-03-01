import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const recommend = () => import('../views/Recommend.vue')
const Rank = () => import('../views/Rank.vue')
const Singer = () => import('../views/Singer.vue')
const Search = () => import('../views/Search.vue')

const Detail = () => import('../components/Recommend/Detail.vue')
const routes = [
  {
    path: '/',

    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: recommend,
    children: [
      {
        path: 'detail/:id/:type',
        component: Detail
      }
    ]

  }, {
    path: '/rank',
    component: Rank
  }, {
    path: '/singer',
    component: Singer
  }, {
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
