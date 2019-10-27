import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRestaurants } from '../../actions';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({restaurants, getRestaurants}) => {
  useEffect(() => {
    getRestaurants();
  }, [getRestaurants])

  return(
    <div>
      {restaurants.map(restaurant => 
        <RestaurantCard key={restaurant.restID} restaurantList={restaurant} /> 
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    gettingRestaurants: state.gettingRestaurants,
    postingRestaurant: state.postingRestaurant,
    error: state.error
  };
}

export default connect(mapStateToProps, { getRestaurants })(RestaurantList);