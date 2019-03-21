import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/page/IndexPage'
import DetailPage from '@/components/page/DetailPage'
import LikePage from '@/components/page/LikePage'
import SearchPage from '@/components/page/SearchPage'
import OtherPage from '@/components/page/OtherPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/circles/:id',
      name: 'DetailPage',
      component: DetailPage
    },
    {
      path: '/likes',
      name: 'LikePage',
      component: LikePage
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: '/others',
      name: 'OtherPage',
      component: OtherPage
    }
  ]
})
