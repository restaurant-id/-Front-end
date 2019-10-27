import React, { useState } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { postRestaurant } from '../actions';

const AddRestaurant = ({ postRestaurant }) => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    city: "",
    address: "",
    description: "",
    city_id: ""
  });

  const handleChanges = e => {
    setRestaurant({...restaurant, [e.target.name]: e.target.value });  
  };

  const handleSubmit = e => {
    e.preventDefault();
    postRestaurant(restaurant);
    setRestaurant({
      name: "",
      city: "",
      address: "",
      description: "",
      city_id: ""
    });
  };

  // uncomment the lines below to verify restaurant was added to city
  // axiosWithAuth()
  //   .get("/cities/1/restaurants")
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));

  //uncomment the lines below to view cities
  // axiosWithAuth()
  //   .get("/cities")
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h2>Add Restaurant</h2>
        <Form.Field>
          <label>Restaurant Name</label>
          <Input
            type="text"
            name="name"
            value={restaurant.name}
            onChange={handleChanges}
            placeholder="Restaurant Name"
          />
        </Form.Field>
        <Form.Field>
          <label>Restaurant City</label>
          <Input
            type="text"
            name="city"
            value={restaurant.city}
            onChange={handleChanges}
            placeholder="City"
          />
        </Form.Field>
        <Form.Field>
          <label>Restaurant Address</label>
          <Input
            type="text"
            name="address"
            value={restaurant.address}
            onChange={handleChanges}
            placeholder="Address"
          />
        </Form.Field>
        <Form.Field>
          <label>Restaurant Description</label>
          <TextArea
            type="textarea"
            name="description"
            value={restaurant.description}
            onChange={handleChanges}
            placeholder="Description"
          />
        </Form.Field>
        <Form.Field>
        <label>Restaurant City ID</label>
          <Input
            type="num"
            min="1"
            max="4"
            name="city_id"
            value={restaurant.city_id}
            onChange={handleChanges}
            placeholder="City ID"
          />
        </Form.Field>
        <Button>Add</Button>
      </Form>
    </>
  );
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    gettingRestaurants: state.gettingRestaurants,
    postingRestaurant: state.postingRestaurant,
    error: state.error
  };
};

export default connect(mapStateToProps, { postRestaurant })(AddRestaurant);