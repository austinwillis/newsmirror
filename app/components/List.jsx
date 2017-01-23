import React from 'react'

const List = ({stories}) => (
  <div>
    {stories.data.map((story) => <p key={story.id}>{story.id}</p>)}
  </div>
)


export default List
