import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Translate from "@/i18n/translation"
import Home from '@/Views/Home.vue'
import About from '@/Views/About.vue'
import PageNotFound from '@/Views/PageNotFound.vue'

const routes = [
  // ------------------------------------------------------------------------- //
  // Home
  // ------------------------------------------------------------------------- //
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/sl',
    name: 'home.sl',
    component: Home,
  },
  {
    path: '/en',
    name: 'home.en',
    component: Home,
  },

  // ------------------------------------------------------------------------- //
  // About
  // ------------------------------------------------------------------------- //
  { 
    path: '/about',
    name: 'about.EN',
    component: About,
  },
  {
    path: '/en/about',
    name: 'about.en',
    component: About,
  },
  {
    path: '/o-nas',
    component: Home,
    name: 'about.SL',
  },
  {
    path: '/sl/o-nas',
    name: 'about.sl',
    component: About,
  },

  // ------------------------------------------------------------------------- //
  // 404
  // ------------------------------------------------------------------------- //
  {
    path: '/404',
    name: '404',
    component: PageNotFound,
  },
  {
    path: '/en/404',
    name: '404.en',
    component: PageNotFound,
  },
  {
    path: '/sl/404',
    name: '404.sl',
    component: PageNotFound,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'pageNotFound',
    redirect: { name: '404', params: {} }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(Translate.routeMiddleware)

export default router
