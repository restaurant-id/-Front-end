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
import Image from 'react-bootstrap/Image';

export default function RestaurantCard(props) {
  return (
    <Container>
    <Card className="bg-warning">
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://source.unsplash.com/random" alt="Restaurant" thumbnail/>
        </Col>
          <CardBody>
          <CardTitle>{"Restaurant name"}</CardTitle>
          <CardText>{"Rating"}</CardText>
          <CardText>{"location"}</CardText>
        </CardBody>
      </Row>
    </Card>
  </Container>
  );
}
