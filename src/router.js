import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Translate from "@/i18n/translation"
import HomeView from '@/Views/HomeView.vue'
import AboutView from '@/Views/AboutView.vue'
import PageNotFoundView from '@/Views/PageNotFoundView.vue'

const routes = [
  // ------------------------------------------------------------------------- //
  // Home
  // ------------------------------------------------------------------------- //
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/sl',
    name: 'home.sl',
    component: HomeView,
  },
  {
    path: '/en',
    name: 'home.en',
    component: HomeView,
  },

  // ------------------------------------------------------------------------- //
  // About
  // ------------------------------------------------------------------------- //
  { 
    path: '/about',
    name: 'about.EN',
    component: AboutView,
  },
  {
    path: '/en/about',
    name: 'about.en',
    component: AboutView,
  },
  {
    path: '/o-nas',
    component: HomeView,
    name: 'about.SL',
  },
  {
    path: '/sl/o-nas',
    name: 'about.sl',
    component: AboutView,
  },

  // ------------------------------------------------------------------------- //
  // 404
  // ------------------------------------------------------------------------- //
  {
    path: '/404',
    name: '404',
    component: PageNotFoundView,
  },
  {
    path: '/en/404',
    name: '404.en',
    component: PageNotFoundView,
  },
  {
    path: '/sl/404',
    name: '404.sl',
    component: PageNotFoundView,
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
