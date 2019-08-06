import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../FoodEntries/style.css';
import '../../utils/API'
import API from '../../utils/API';


class FoodEntries extends React.Component {
  state = {
    data: []
  }

componentDidMount() {
API.getFoods(response => {
  console.log(response)
  //result is total calories
  const result = response.data.reduce((a,b) => a + parseInt(b.calories), 0)
  console.log(result)
  this.setState({
    data: response.data,
    totalCalories: result
  })
})
}

render () {

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
              <div id = "food-display" />
              {this.state.data.map((each, index) => {
                return (
                  <tr>
                    <td>{each.title}</td>
                    <td>{each.calories}</td>
                    <td>{each.proteins}</td>
                    <td>{each.fats}</td>  
                  </tr>
                )
              })}
              <p>Total Calories: {this.state.totalCalories}</p>

            </MDBTableBody>
            </MDBTable>
        </Col>
    </Row> 
  );
}
}

export default FoodEntries;