import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/page/IndexPage'
import DetailPage from '@/components/page/DetailPage'

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
    }
  ]
})
