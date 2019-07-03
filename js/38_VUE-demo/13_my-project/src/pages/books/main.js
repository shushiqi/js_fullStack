import Vue from 'vue'
import Books from './Books'

Vue.config.productionTip = false

const app = new Vue(Books)
app.$mount()