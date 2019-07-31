import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBtn } from "mdbreact";
import SearchModal from "../SearchModal";
import '../FoodSearch/style.css';

const FoodSearch = () => {
  return (
    <Row className="block">
        <Col md={12}>
            <h3>Food Search</h3>
            <Row>
            <Col md={6}>
            <SearchModal />
            </Col>
            <Col md={6}>
            <MDBBtn>Accept</MDBBtn>
            </Col>
            </Row>
        </Col>
    </Row>
  );
}

export default FoodSearch;