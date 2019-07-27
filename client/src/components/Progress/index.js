import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBtn } from "mdbreact";
import { MDBProgress } from 'mdbreact';
import '../Progress/style.css';

const Progress = () => {
  return (
    <Row className="block">
        <Col md={12}>
            <div>
            <h3>Progress</h3>
            <Row>
                <Col md={12}>
                <MDBProgress material value={25} height="20px" color="danger" animated>
                    25%
                </MDBProgress>
                </Col>
            </Row>
            <Row>
                <Col md={2}><MDBBtn>Update</MDBBtn></Col><Col md={4}><p>Target:  cals.   -       =    </p></Col>
            </Row>
            </div>  
        </Col>
    </Row> 
  );
}

export default Progress;