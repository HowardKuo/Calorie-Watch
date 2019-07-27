import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../FoodEntries/style.css';

const FoodEntries = () => {
  return (
    <Row className="block">
        <Col md={12}>
            <h3>Food Log</h3>
            <MDBTable hover>
            <MDBTableHead>
                <tr>
                <th>Food Item</th>
                <th>Calories</th>
                <th>Protien</th>
                <th>Fat</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                <td>Orange</td>
                <td>50</td>
                <td>1</td>
                <td>0</td>
                </tr>
                <tr>
                <td>Apple</td>
                <td>2</td>
                <td>0</td>
                <td>0</td>
                </tr>
                <tr>
                <td>Pizza</td>
                <td>200</td>
                <td>20</td>
                <td>10</td>
                </tr>
            </MDBTableBody>
            </MDBTable>
        </Col>
    </Row> 
  );
}

export default FoodEntries;