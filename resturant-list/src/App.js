import React from 'react';
<<<<<<< HEAD
import NavBar from './components/NavBar.js';
import RestaurantDetails from './components/RestaurantDetails/RestaurantDetails.js';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<RestaurantDetails />
		</div>
	);
=======
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
>>>>>>> master
}

export default App;
