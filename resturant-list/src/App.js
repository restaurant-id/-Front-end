import React from 'react';
import NavBar from './components/NavBar';
import Login from './components/Login';
import 'semantic-ui-css/semantic.min.css';
import ResurantCard from './components/RestaurantCards';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Login />
			<ResurantCard />
		</div>
	);
}

export default App;
