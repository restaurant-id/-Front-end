import React from 'react';
import { Route} from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import RestaurantCard from './RestaurantCards';
import RestaurantDetails from './RestaurantDetails/RestaurantDetails';

export default function AppRoute() {
	return (
		<div>
			<Route exact path='/' component={RestaurantCard} />
			<Route path='/Signup' component={Signup} />
			<Route path='/Login' component={Login} />
			<Route path='/RestaurtantCard' component={RestaurantCard} />
			<Route path="/RestaurtantDetails" component={RestaurantDetails}/>

		</div>
	);
}
