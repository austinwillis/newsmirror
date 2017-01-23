export function stories(state = {}, action) {
  console.log(state)
  switch (action.type) {
    case 'FETCH_TOP_STORIES':
      return Object.assign({}, state, { isFetching: true, storyType: 'top' })
    case 'FETCH_NEW_STORIES':
      return Object.assign({}, state, { isFetching: true, storyType: 'new' })
    default:
      return state
  }
}
