import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FilterComp from '@/components/FilterComp'
import ProductsComp from '@/components/ProductsComp'
import Login from '@/components/Login'
import Mobile from '@/components/Mobile'
import Laptop from '@/components/Laptop'
import Headphone from '@/components/headphone'
import Watch from '@/components/Watch'
import Tv from '@/components/TV'
import Slider from '@/components/Slider'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/filter',
      name: 'FilterComp',
      component: FilterComp
    },
    {
      path: '/products',
      name: 'ProductsComp',
      component: ProductsComp
    },
    {
      path: '/login',
      name: '/Login',
      component: Login
    },
    {
      path: '/mobile',
      name: '/Mobile',
      component: Mobile
    },
    {
      path: '/laptop',
      name: '/Laptop',
      component: Laptop
    },
    {
      path: '/watch',
      name: '/Watch',
      component: Watch
    },
    {
      path: '/headphone',
      name: '/Headphone',
      component: Headphone
    },
    {
      path: '/tv',
      name: '/Tv',
      component: Tv
    }
  ]
})
