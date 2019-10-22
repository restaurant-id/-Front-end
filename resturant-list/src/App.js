import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import "semantic-ui-css/semantic.min.css";
import RestaurantCard from "./Components/RestaurantCards"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Login />
      hello world
      <Footer/>
      <RestaurantCard/>
    </div>
  );
}

export default App;
