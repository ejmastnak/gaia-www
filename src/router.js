import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Translate from "@/i18n/translation"
import Home from '@/Views/Home/Home.vue'
import About from '@/Views/About/About.vue'
import WhereToBuy from '@/Views/WhereToBuy.vue'
import Contact from '@/Views/Contact/Contact.vue'
import Products from '@/Views/Products/Products.vue'
import JabSok from '@/Views/Products/JabSok.vue'
import JabKis from '@/Views/Products/JabKis.vue'
import SntOlj from '@/Views/Products/SntOlj.vue'
import PageNotFound from '@/Views/PageNotFound.vue'

const routes = [
  // --------------------------------------------------------------- //
  // Home
  // --------------------------------------------------------------- //
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: '/sl',
    name: 'home.sl',
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: '/en',
    name: 'home.en',
    component: Home,
    meta: {
      title: "Home",
    },
  },

  // --------------------------------------------------------------- //
  // About
  // --------------------------------------------------------------- //
  { 
    path: '/about',
    name: 'about.EN',
    component: About,
    meta: {
      title: "About",
    },
  },
  {
    path: '/en/about',
    name: 'about.en',
    component: About,
    meta: {
      title: "About",
    },
  },
  {
    path: '/o-nas',
    name: 'about.SL',
    component: About,
    meta: {
      title: "About",
    },
  },
  {
    path: '/sl/o-nas',
    name: 'about.sl',
    component: About,
    meta: {
      title: "About",
    },
  },

  // --------------------------------------------------------------- //
  // Where to buy
  // --------------------------------------------------------------- //
  { 
    path: '/where-to-buy',
    name: 'whereToBuy.EN',
    component: WhereToBuy,
    meta: {
      title: "WhereToBuy",
    },
  },
  {
    path: '/en/where-to-buy',
    name: 'whereToBuy.en',
    component: WhereToBuy,
    meta: {
      title: "WhereToBuy",
    },
  },
  {
    path: '/kje-kupiti',
    name: 'whereToBuy.SL',
    component: WhereToBuy,
    meta: {
      title: "WhereToBuy",
    },
  },
  {
    path: '/sl/kje-kupiti',
    name: 'whereToBuy.sl',
    component: WhereToBuy,
    meta: {
      title: "WhereToBuy",
    },
  },

  // --------------------------------------------------------------- //
  // Contact
  // --------------------------------------------------------------- //
  { 
    path: '/contact',
    name: 'contact.EN',
    component: Contact,
    meta: {
      title: "Contact",
    },
  },
  {
    path: '/en/contact',
    name: 'contact.en',
    component: Contact,
    meta: {
      title: "Contact",
    },
  },
  {
    path: '/kontakt',
    name: 'contact.SL',
    component: Contact,
    meta: {
      title: "Contact",
    },
  },
  {
    path: '/sl/kontakt',
    name: 'contact.sl',
    component: Contact,
    meta: {
      title: "Contact",
    },
  },

  // --------------------------------------------------------------- //
  // Products
  // --------------------------------------------------------------- //
  { 
    path: '/products',
    name: 'products.EN',
    component: Products,
    meta: {
      title: "Products",
    },
  },
  {
    path: '/en/products',
    name: 'products.en',
    component: Products,
    meta: {
      title: "Products",
    },
  },
  {
    path: '/izdelki',
    name: 'products.SL',
    component: Products,
    meta: {
      title: "Products",
    },
  },
  {
    path: '/sl/izdelki',
    name: 'products.sl',
    component: Products,
    meta: {
      title: "Products",
    },
  },

  // --------------------------------------------------------------- //
  // Products/JabSok
  // --------------------------------------------------------------- //
  { 
    path: '/jabsok',
    name: 'jabsok',
    component: JabSok,
    meta: {
      title: "JabSok",
    },
  },
  {
    path: '/products/apple-juice',
    name: 'jabsok.EN',
    component: JabSok,
    meta: {
      title: "JabSok",
    },
  },
  {
    path: '/en/products/apple-juice',
    name: 'jabsok.en',
    component: JabSok,
    meta: {
      title: "JabSok",
    },
  },
  {
    path: '/izdelki/jabolcni-sok',
    name: 'jabsok.SL',
    component: JabSok,
    meta: {
      title: "JabSok",
    },
  },
  {
    path: '/sl/izdelki/jabolcni-sok',
    name: 'jabsok.sl',
    component: JabSok,
    meta: {
      title: "JabSok",
    },
  },

  // --------------------------------------------------------------- //
  // Products/JabKis
  // --------------------------------------------------------------- //
  { 
    path: '/jabkis',
    name: 'jabkis',
    component: JabKis,
    meta: {
      title: "JabKis",
    },
  },
  {
    path: '/products/apple-cider-vinegar',
    name: 'jabkis.EN',
    component: JabKis,
    meta: {
      title: "JabKis",
    },
  },
  {
    path: '/en/products/apple-cider-vinegar',
    name: 'jabkis.en',
    component: JabKis,
    meta: {
      title: "JabKis",
    },
  },
  {
    path: '/izdelki/jabolcni-kis',
    name: 'jabkis.SL',
    component: JabKis,
    meta: {
      title: "JabKis",
    },
  },
  {
    path: '/sl/izdelki/jabolcni-kis',
    name: 'jabkis.sl',
    component: JabKis,
    meta: {
      title: "JabKis",
    },
  },

  // --------------------------------------------------------------- //
  // Products/SntOlj
  // --------------------------------------------------------------- //
  { 
    path: '/sntolj',
    name: 'sntolj',
    component: SntOlj,
    meta: {
      title: "SntOlj",
    },
  },
  {
    path: '/products/st-johns-wort-oil',
    name: 'sntolj.EN',
    component: SntOlj,
    meta: {
      title: "SntOlj",
    },
  },
  {
    path: '/en/products/st-johns-wort-oil',
    name: 'sntolj.en',
    component: SntOlj,
    meta: {
      title: "SntOlj",
    },
  },
  {
    path: '/izdelki/sentjanzevo-olje',
    name: 'sntolj.SL',
    component: SntOlj,
    meta: {
      title: "SntOlj",
    },
  },
  {
    path: '/sl/izdelki/sentjanzevo-olje',
    name: 'sntolj.sl',
    component: SntOlj,
    meta: {
      title: "SntOlj",
    },
  },

  // --------------------------------------------------------------- //
  // 404
  // --------------------------------------------------------------- //
  {
    path: '/404',
    name: '404',
    component: PageNotFound,
    meta: {
      title: "PageNotFound",
    },
  },
  {
    path: '/en/404',
    name: '404.en',
    component: PageNotFound,
    meta: {
      title: "PageNotFound",
    },
  },
  {
    path: '/sl/404',
    name: '404.sl',
    component: PageNotFound,
    meta: {
      title: "PageNotFound",
    },
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach(Translate.routeMiddleware)

export default router
