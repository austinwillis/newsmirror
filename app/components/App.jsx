import React from 'react'
import List from './List.jsx'

import './App.scss'

const App = (props) => (
    <div>
      <h1>Hacker News</h1>
      <button onClick={props.fetchTopStories}>Top</button>
      <button onClick={props.fetchNewStories}>New</button>
      <List {...props}/>
    </div>
  )

export default App
