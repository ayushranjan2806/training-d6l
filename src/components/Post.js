import React from 'react'

const Post = ({title , cont}) => {
  return (
    <div>
        <h1>{title}
        </h1>
        <h2>{cont}</h2>
    </div>
  )
}

export default Post