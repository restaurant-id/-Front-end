import React from 'react';
import { Route} from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import RestaurantCard from './RestaurantCards';

import RestaurantList from '../Components/Restaurants/RestaurantList';
import AddRestaurant from './AddRestaurant';


export default function AppRoute() {
	return (
		<div>
			<Route exact path='/' component={RestaurantCard} />
			<Route path='/Signup' component={Signup} />
			<Route path='/Login' component={Login} />



			<Route path='/RestaurantList' component={RestaurantList} />
			<Route path='/AddRestaurant' component={AddRestaurant} />

		</div>
	);
}
