import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import RegisterForm from '../components/RegisterModal';
import LoginModal from '../components/LoginModal';
import '../pages/style.css'; 

function Home() {
  return (
    <div>
      <Row className="topRow">
        <Container className="contain">
          <Col md={6} className="buttonBox">
            <div className="content">
              <h1 id="hide">Calorie Counter </h1>
              <p id="hide">"Health goals start here." </p>
              <div className="btnContainer">
                <RegisterForm />
                <LoginModal />
              </div>
            </div>  
          </Col>
        </Container>
      </Row>
    </div>
  );
}

export default Home;