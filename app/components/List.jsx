import React from 'react'

const List = ({stories}) => (
  <div>
    {stories.data.map((story) => <p key={story}>{story}</p>)}
  </div>
)


export default List
