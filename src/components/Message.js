import React from 'react'

const Message = (props) => {
  return (
    <div>
    <h1>
        passing the message using the props 
        {props.message}

    </h1>
    
    </div>
  )
}

export default Message