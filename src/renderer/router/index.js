import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'china-map',
      component: require('@/components/ChinaMap').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
