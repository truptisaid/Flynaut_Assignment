import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyComponent from './MyComponent';
import ScrollDiv from './ScrollDiv';
import MyContext from './MyContext';
import ClassComponent from './ClassComponent';

function App() {

  

  const data=["sushant","sushant","sushant","sushant","sushant","sushant","sushant","sushant","sushant","sushant"];
  return(
    <MyContext.Provider value="Hello world from  context">
     <div style={{flex:1 ,flexDirection:'column',justifyContent:'center'}}>
        <MyComponent  inputCount={5}/>
        <ScrollDiv data={data} />
        <ClassComponent/>
     </div>
     </MyContext.Provider>
  );
}

export default App;
