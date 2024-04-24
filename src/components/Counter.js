import React, { useState } from 'react';

const Counter = ({ initialCount }) => {
  const [Count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(Count + 1);
  };

  const decrement = () => {
    setCount(Count - 1);
  };

  return (
    <div>
      <p>Count : {Count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;