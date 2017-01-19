export function stories(state = {}, action) {
  console.log(state)
  switch (action.type) {
    case 'SHOW_TOP_STORIES':
      return state.slice(0).sort((a, b) => a.id < b.id ? -1 : (a.id > b.id ? 1 : 0))
    case 'SHOW_NEW_STORIES':
      return state.slice(0).sort((a, b) => a.id > b.id ? -1 : (a.id < b.id ? 1 : 0))
    default:
      return state
  }
}
