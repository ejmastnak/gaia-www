import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Translate from "@/i18n/translation"
import Home from '@/Views/Home.vue'
import About from '@/Views/About.vue'
import WhereToBuy from '@/Views/WhereToBuy.vue'
import Contact from '@/Views/Contact.vue'
import ProductsIndex from '@/Views/Products/Index.vue'
import PageNotFound from '@/Views/PageNotFound.vue'

const routes = [
  // --------------------------------------------------------------- //
  // Home
  // --------------------------------------------------------------- //
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

  // --------------------------------------------------------------- //
  // About
  // --------------------------------------------------------------- //
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
    name: 'about.SL',
    component: Home,
  },
  {
    path: '/sl/o-nas',
    name: 'about.sl',
    component: About,
  },

  // --------------------------------------------------------------- //
  // Where to buy
  // --------------------------------------------------------------- //
  { 
    path: '/where-to-buy',
    name: 'wheretobuy.EN',
    component: WhereToBuy,
  },
  {
    path: '/en/where-to-buy',
    name: 'wheretobuy.en',
    component: WhereToBuy,
  },
  {
    path: '/kje-kupiti',
    name: 'wheretobuy.SL',
    component: WhereToBuy,
  },
  {
    path: '/sl/kje-kupiti',
    name: 'wheretobuy.sl',
    component: WhereToBuy,
  },

  // --------------------------------------------------------------- //
  // Contact
  // --------------------------------------------------------------- //
  { 
    path: '/contact',
    name: 'contact.EN',
    component: Contact,
  },
  {
    path: '/en/contact',
    name: 'contact.en',
    component: Contact,
  },
  {
    path: '/kontakt',
    name: 'contact.SL',
    component: Contact,
  },
  {
    path: '/sl/kontakt',
    name: 'contact.sl',
    component: Contact,
  },

  // --------------------------------------------------------------- //
  // Products
  // --------------------------------------------------------------- //
  { 
    path: '/products',
    name: 'products.EN',
    component: ProductsIndex,
  },
  {
    path: '/en/products',
    name: 'products.en',
    component: ProductsIndex,
  },
  {
    path: '/izdelki',
    name: 'products.SL',
    component: ProductsIndex,
  },
  {
    path: '/sl/izdelki',
    name: 'products.sl',
    component: ProductsIndex,
  },

  // --------------------------------------------------------------- //
  // 404
  // --------------------------------------------------------------- //
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
