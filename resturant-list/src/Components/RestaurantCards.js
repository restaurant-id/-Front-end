import React from 'react';
import {
	Container,
	Card,
	CardText,
	CardBody,
	CardTitle,
	Row,
	Col,
	CardLink
} from 'reactstrap';
import thumbImage from './photos/Restaurant.jpg';
import {Link} from "react-router-dom"

export default function RestaurantCard({props}) {
  return (
  <Container>
    <Card className="bg-warning  mb-5">
      <Row>
        <Col xs={6} md={4}>
          <img className="mw-100" src={thumbImage} alt="Restaurant" thumbnail/>
        </Col>
          <CardBody>
          <CardTitle className="font-weight-bold">{"Tucanos"}</CardTitle>
            <CardText >{"Ratings:5 stars"}</CardText>
            <CardText className="mr-5  float-right" >{"$$$"}</CardText>
            <CardText >{"Salt Lake City"}</CardText>
            <CardText className="mr-5  float-right">{"022 Main Street 84058"}</CardText>
            <CardText>{"This brazilian steak house serves 15 different types of meats"}</CardText>
            <Link to={`/RestaurantDetails`}>More Details</Link> 
          </CardBody>
      </Row>
    </Card>

    <Card className="bg-warning  mb-5">
      <Row>
        <Col xs={6} md={4}>
          <img className="mw-100" src={thumbImage} alt="Restaurant" thumbnail/>
        </Col>
          <CardBody>
          <CardTitle className="font-weight-bold">{"Squatters Pub Brewery"}</CardTitle>
            <CardText >{"Ratings:5 stars"}</CardText>
            <CardText className="mr-5  float-right" >{"$$-$$$"}</CardText>
            <CardText >{"Salt Lake City"}</CardText>
            <CardText className="mr-5  float-right">{"555 s Main St"}</CardText>
            <CardText>{"Fine dinning with classic takes on all types of cuisine"}</CardText>
            <Link to={`/RestaurantDetails`}>More Details</Link> 
          </CardBody>
      </Row>
    </Card>

    <Card className="bg-warning ">
      <Row>
        <Col xs={6} md={4}>
          <img className="mw-100" src={thumbImage} alt="Restaurant" thumbnail/>
        </Col>
          <CardBody>
          <CardTitle className="font-weight-bold">{"The Garden Cafe"}</CardTitle>
            <CardText >{"Ratings:4 stars"}</CardText>
            <CardText className="mr-5  float-right" >{"$$$$$"}</CardText>
            <CardText >{"Salt Lake City"}</CardText>
            <CardText className="mr-5  float-right">{"147 W Broadway"}</CardText>
            <CardText>{"Serves pub style food with over a 100 beers "}</CardText>
            <Link to={`/RestaurantDetails`}>More Details</Link> 
          </CardBody>
      </Row>
    </Card>
    
  </Container>
  );
}
// https://source.unsplash.com/random