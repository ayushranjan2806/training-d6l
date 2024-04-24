import React ,{useState} from 'react'

const Count = () => {
    const [count ,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement </button>
    </div>
  )
}

export default Count