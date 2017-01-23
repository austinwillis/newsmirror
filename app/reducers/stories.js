export function stories(state = {}, action) {
  console.log(state)
  switch (action.type) {
    case 'FETCH_TOP_STORIES':
      return Object.assign({}, state, { isFetching: true, storyType: 'top' })
    case 'FETCH_NEW_STORIES':
      return Object.assign({}, state, { isFetching: true, storyType: 'new' })
    case 'RECEIVE_STORIES':
      return Object.assign({}, state, { data: action.stories })
    default:
      return state
  }
}
