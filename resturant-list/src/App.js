import React from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import AppRouter from "./Components/AppRouter";
// import RestaurantCard from "./Components/RestaurantCards"
import RestaurantList from "./Components/RestaurantList"
import RestaurantDetails from "./Components/RestaurantDetails/RestaurantDetails"


import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';

const App =() => {
	return (
    <div className="App">
      <NavBar />
      <Container>
        <AppRouter />
      </Container>
      <Footer />
    </div>
  );
}

export default App;