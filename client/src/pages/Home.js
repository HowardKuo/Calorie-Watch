import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import RegisterForm from '../components/RegisterModal';
import ModalPage from '../components/LoginModal';
import '../pages/style.css';

function Home() {
  return (
    <div>
      <Row className="topRow">
        <Container className="contain">
          <Col md={6} className="buttonBox">
            <div className="content">
              <h1>Calorie Counter </h1>
              <p>Your goals start here.</p>
              <div className="btnContainer">
                <RegisterForm />
                <ModalPage />
              </div>
            </div>  
          </Col>
        </Container>
      </Row>
    </div>
  );
}

export default Home;