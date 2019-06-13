import Vue from 'vue'
import Router from 'vue-router'

vue.use(Router)

export default new Router({
  routes: [
    {
      path: '../components/view/demo2/father.vue',
      name: 'father',
      component: Login
    }
  ]
})
