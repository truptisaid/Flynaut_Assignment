import React, { useRef } from 'react';

const ScrollDiv = ({data}) => {
  const scrollableRef = useRef(null);

  const scrollToBottom = () => {
    scrollableRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  return ( 
	<div>
      <div style={{ overflow: 'scroll', height: '200px' }} ref={scrollableRef}>
        {data.map((element,index)=> <h1 key={index}>{element}</h1>)}
      </div>
      <button onClick={scrollToBottom}>Scroll to Bottom</button>
    </div>
  );
};

export default ScrollDiv;