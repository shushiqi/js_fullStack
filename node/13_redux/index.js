const { createStore, applyMiddleware } = require('redux')
const reducer = require('./reducer/index')
const store = createStore(reducer)
store.subscribe(() => {
  log
})
setTimeout(() => {
  store.dispatch({
    type: 'ADD_FILM',
    id: 0,
    name: 'Wandering Earth'
  })
}, 3000);
