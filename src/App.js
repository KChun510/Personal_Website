import NavBar from './nav'
import SecondCont from './Second_cont'
import FirstCont from './first_cont'
import React from "react";
import './App.css';



const App = () => {
   return (
    <div className = 'App'>
      <NavBar/>
      <FirstCont/>
      <br></br>
      <br></br>
      <SecondCont/>
      <div id = "spec"></div>
    </div>
    
  );
}

export default App;
