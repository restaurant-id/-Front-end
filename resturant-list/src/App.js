import React from 'react';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import "semantic-ui-css/semantic.min.css";
import ResurantCard from "./Components/RestaurantCards"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Login />
      hello world
     <ResurantCard/>
    </div>
  );
}

export default App;
