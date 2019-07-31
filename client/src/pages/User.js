import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FoodEntries from '../components/FoodEntries';
import Progress from '../components/Progress';
import FoodSearch from '../components/FoodSearch';
import '../pages/style.css';

class User extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={12}>
                <h5>Hi, User</h5>
            </Col>
          </Row>  
            <Progress />
            <FoodEntries />
            <FoodSearch />  
        </Container>
      </div>
    );
  }
}
export default User;
