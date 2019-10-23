import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import AppRouter from "./Components/AppRouter";
// import Login from './Components/Login';
import RestaurantCard from "./Components/RestaurantCards"

import 'bootstrap/dist/css/bootstrap.css';
import "semantic-ui-css/semantic.min.css";


function App() {
  return (
    <div className="App">
     <NavBar/>
     <RestaurantCard/>
     <AppRouter/>
     <Footer/>
    </div>
  );
}

export default App;
