const { combineReducers } = require('redux')
const filmReducer = require('./filmFilter')
const filterReducer = require('./filmFilter')

module.exports = combineReducers({
  films: filmReducer,
  filter: filterReducer
})