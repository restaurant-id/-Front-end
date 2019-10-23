import React from "react";
import {
  Container,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  CardLink

} from "reactstrap";
import Image from "react-bootstrap/Image";

export default function RestaurantCard(props) {
  return (
  <Container>
    <Card className="bg-warning">
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://source.unsplash.com/random" alt="Restaurant" thumbnail/>
        </Col>
          <CardBody>
          <CardTitle className="font-weight-bold">{"Restaurant name"}</CardTitle>
            <CardText >{"Rating"}</CardText>
            <CardText className="mr-5  float-right" >{"Price"}</CardText>
            <CardText >{"Location"}</CardText>
            <CardText className="mr-5  float-right">{"Type"}</CardText>
            <CardLink  href="https://www.google.com"> 647 People have Recommend. Friends.......</CardLink> 
          </CardBody>
      </Row>
    </Card>
  </Container>
  );
}


