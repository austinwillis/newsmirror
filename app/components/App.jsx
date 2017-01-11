import React from 'react'
import List from './List'

import './App.scss';

const App = (props) => (
    <div>
      <h1>Hello World</h1>
      <button onClick={props.showTopStories}>Top</button>
      <button onClick={props.showNewStories}>New</button>
      <List {...props}/>
    </div>
  );

export default App;
