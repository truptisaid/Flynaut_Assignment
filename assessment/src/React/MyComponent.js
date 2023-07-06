import React, { useState, useEffect, useCallback, useContext } from 'react';
import MyContext from './MyContext';

const MyComponent = ({inputCount}) => {

  const [count, setCount] = useState(inputCount);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const contextValue = useContext(MyContext);
 console.log(contextValue);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <p>Context Value: {contextValue}</p>
    </div>
  );
};

export default MyComponent;
