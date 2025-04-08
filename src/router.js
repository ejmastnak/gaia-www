import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Translate from "@/i18n/translation"
import Home from '@/Views/Home/Home.vue'
import About from '@/Views/About/About.vue'
import Bio from '@/Views/Bio.vue'
import Buy from '@/Views/Buy.vue'
import Orchard from '@/Views/Orchard.vue'
import Prices from '@/Views/Prices.vue'
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
    component: About,
  },
  {
    path: '/sl/o-nas',
    name: 'about.sl',
    component: About,
  },

  // --------------------------------------------------------------- //
  // Bio
  // --------------------------------------------------------------- //
  { 
    path: '/organic',
    name: 'bio.EN',
    component: Bio,
  },
  {
    path: '/en/organic',
    name: 'bio.en',
    component: Bio,
  },
  { 
    path: '/bio',
    name: 'bio.SL',
    component: Bio,
  },
  {
    path: '/sl/bio',
    name: 'bio.sl',
    component: Bio,
  },

  // --------------------------------------------------------------- //
  // Orchard
  // --------------------------------------------------------------- //
  { 
    path: '/meadow-orchard',
    name: 'orchard.EN',
    component: Orchard,
  },
  {
    path: '/en/meadow-orchard',
    name: 'orchard.en',
    component: Orchard,
  },
  { 
    path: '/travniski-sadovnjak',
    name: 'orchard.SL',
    component: Orchard,
  },
  {
    path: '/sl/travniski-sadovnjak',
    name: 'orchard.sl',
    component: Orchard,
  },

  // --------------------------------------------------------------- //
  // Where to buy
  // --------------------------------------------------------------- //
  { 
    path: '/buy',
    name: 'buy.EN',
    component: Buy,
  },
  {
    path: '/en/buy',
    name: 'buy.en',
    component: Buy,
  },
  {
    path: '/nakup',
    name: 'buy.SL',
    component: Buy,
  },
  {
    path: '/sl/kje-kupiti',
    name: 'buy.sl',
    component: Buy,
  },

  // --------------------------------------------------------------- //
  // Prices
  // --------------------------------------------------------------- //
  { 
    path: '/prices',
    name: 'prices.EN',
    component: Prices,
  },
  {
    path: '/en/prices',
    name: 'prices.en',
    component: Prices,
  },
  {
    path: '/cenik',
    name: 'prices.SL',
    component: Prices,
  },
  {
    path: '/sl/cenik',
    name: 'prices.sl',
    component: Prices,
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
    component: Products,
  },
  {
    path: '/en/products',
    name: 'products.en',
    component: Products,
  },
  {
    path: '/izdelki',
    name: 'products.SL',
    component: Products,
  },
  {
    path: '/sl/izdelki',
    name: 'products.sl',
    component: Products,
  },

  // --------------------------------------------------------------- //
  // Products/JabSok
  // --------------------------------------------------------------- //
  { 
    path: '/jabsok',
    name: 'jabsok',
    component: JabSok,
  },
  {
    path: '/products/apple-juice',
    name: 'jabsok.EN',
    component: JabSok,
  },
  {
    path: '/en/products/apple-juice',
    name: 'jabsok.en',
    component: JabSok,
  },
  {
    path: '/izdelki/jabolcni-sok',
    name: 'jabsok.SL',
    component: JabSok,
  },
  {
    path: '/sl/izdelki/jabolcni-sok',
    name: 'jabsok.sl',
    component: JabSok,
  },

  // --------------------------------------------------------------- //
  // Products/JabKis
  // --------------------------------------------------------------- //
  { 
    path: '/jabkis',
    name: 'jabkis',
    component: JabKis,
  },
  {
    path: '/products/apple-cider-vinegar',
    name: 'jabkis.EN',
    component: JabKis,
  },
  {
    path: '/en/products/apple-cider-vinegar',
    name: 'jabkis.en',
    component: JabKis,
  },
  {
    path: '/izdelki/jabolcni-kis',
    name: 'jabkis.SL',
    component: JabKis,
  },
  {
    path: '/sl/izdelki/jabolcni-kis',
    name: 'jabkis.sl',
    component: JabKis,
  },

  // --------------------------------------------------------------- //
  // Products/SntOlj
  // --------------------------------------------------------------- //
  { 
    path: '/sntolj',
    name: 'sntolj',
    component: SntOlj,
  },
  {
    path: '/products/st-johns-wort-oil',
    name: 'sntolj.EN',
    component: SntOlj,
  },
  {
    path: '/en/products/st-johns-wort-oil',
    name: 'sntolj.en',
    component: SntOlj,
  },
  {
    path: '/izdelki/sentjanzevo-olje',
    name: 'sntolj.SL',
    component: SntOlj,
  },
  {
    path: '/sl/izdelki/sentjanzevo-olje',
    name: 'sntolj.sl',
    component: SntOlj,
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
