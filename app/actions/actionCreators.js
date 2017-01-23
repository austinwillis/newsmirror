import fetch from 'isomorphic-fetch'

export function showTopStories() {
  return {
    type: 'FETCH_TOP_STORIES'
  }
}

export function showNewStories() {
  return {
    type: 'FETCH_NEW_STORIES'
  }
}

export function refreshStories() {
  return {
    type: 'REFRESH_STORIES'
  }
}

export function receiveStories(stories) {
  return {
    type: 'RECEIVE_STORIES',
    stories,
    receivedAt: Date.now()
  }
}

export function fetchTopStories() {
  return (dispatch) => {
    dispatch(showTopStories())
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then(json =>
        dispatch(receiveStories(json))
      ).catch(error => console.log(error))
  }
}

export function fetchNewStories() {
  return (dispatch) => {
    dispatch(showNewStories())
    return fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then(response => response.json())
      .then(json =>
        dispatch(receiveStories(json))
      ).catch(error => console.log(error))
  }
}