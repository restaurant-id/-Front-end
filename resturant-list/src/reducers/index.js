import {
  GET_RESTAURANTS_START,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAIL,
  POST_RESTAURANT_START,
  POST_RESTAURANT_SUCCESS,
  POST_RESTAURANT_FAIL
} from "../actions";

const initialState = {
  restaurants: [],
  gettingRestaurants: false,
  postingRestaurant: false,
  error: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS_START:
      return{
        ...state,
        gettingRestaurants: true
      };
    case GET_RESTAURANTS_SUCCESS:
      return {
        ...state,
        restaurants: action.payload,
        gettingRestaurants: false
      };
    case GET_RESTAURANTS_FAIL:
      return{
        ...state,
        error: action.payload,
        gettingRestaurants: false
      };
    case POST_RESTAURANT_START:
      return{
        ...state,
        postingRestaurant: true
      };
    case POST_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurants: action.payload,
        postingRestaurant: false
      };
    case POST_RESTAURANT_FAIL:
      return{
        ...state,
        error: action.payload,
        postingRestaurant: false
      }
    default:
      return state;
  }
}

export default reducer;