import Vue from './node_modules/vue'
import Comments from './Comments'

Vue.config.productionTip = false

const app = new Vue(Comments)
app.$mount()