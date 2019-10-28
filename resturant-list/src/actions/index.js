import axiosWithAuth from '../utils/axiosWithAuth';

export const GET_RESTAURANTS_START = "GET_RESTAURANTS_START";
export const GET_RESTAURANTS_SUCCESS = "GET_RESTAURANTS_SUCCESS";
export const GET_RESTAURANTS_FAIL = "GET_RESTAURANTS_FAIL";

export const POST_RESTAURANT_START = "POST_RESTAURANT_START";
export const POST_RESTAURANT_SUCCESS = "POST_RESTAURANT_SUCCESS";
export const POST_RESTAURANT_FAIL = "POST_RESTAURANT_FAIL";

export const getRestaurants = () => dispatch => {
  dispatch({ type: GET_RESTAURANTS_START });
  axiosWithAuth()
    .get("/cities/1/restaurants")
    .then(res => dispatch({ type: GET_RESTAURANTS_SUCCESS, payload: res.data.restaurants }))
    .catch(err => dispatch({ type: GET_RESTAURANTS_FAIL, payload: err }));
}

export const postRestaurant = restaurant => dispatch => {
  dispatch({ type: POST_RESTAURANT_START });
  axiosWithAuth()
    .post(`/cities/restaurants`, restaurant)
    .then(res =>
      dispatch({ type: POST_RESTAURANT_SUCCESS, payload: res.data.restaurants }))
    .catch(err => dispatch({ type: POST_RESTAURANT_FAIL, payload: err}));
}