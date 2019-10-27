import React from 'react';
import { Card } from 'semantic-ui-react';

const RestaurantCard = ({restaurantList}) => {
  return(
    <>
    {restaurantList.restID > 1 ? (
      <Card>
        <Card.Content>
          <Card.Header>{`${restaurantList.restName}`}</Card.Header>
        </Card.Content>
      </Card>
    ) : (<br />)}
    </>
  )
}

export default RestaurantCard;