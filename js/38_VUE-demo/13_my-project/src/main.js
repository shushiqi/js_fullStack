import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages:['^/pages/books/main'],
    "window": {
      "navigationBarBackgroundColor": "#EA5149",
      "navigationBarTextStyle": "light",
      "navigationBarTitleText": "十七图书",
      "backgroundTextStyle": "light"
    },
    "tabBar": {
      selectedColor: '#EA5149',
      "list": [
        {
          text: '图书',
          pagePath: 'pages/books/main',
          iconPath: 'static/images/book.png',
          selectedIconPath:'static/images/book-active.png'
        },
        {
          text: '评论',
          pagePath: 'pages/comments/main',
          iconPath: 'static/images/todo.png',
          selectedIconPath:'static/images/todo-active.png'
        },
        {
          text: '我',
          pagePath: 'pages/me/main',
          iconPath: 'static/images/me.png',
          selectedIconPath:'static/images/me-active.png'
        }
      ]
    },
  }

}