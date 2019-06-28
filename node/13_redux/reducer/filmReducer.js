module.exports = function (state = [], action) {
  switch (action.type) {
    case 'ADD_FILM':
      return [{
        id: action.id,
        naem: action.name
      }, ...state];
    case 'SELETE_FILM':
      return state.filter(film => film.id!=action.id)
    default:
      return state
  }
}