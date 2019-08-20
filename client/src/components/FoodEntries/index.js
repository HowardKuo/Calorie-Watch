import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
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
 this.loadFoods();
}

loadFoods = () => {
  API.getFoods(response => {
    // console.log(response)
    const totalCalories = response.data.reduce((a,b) => a + parseInt(b.calories), 0)
    // console.log(totalCalories)
    const totalProteins = response.data.reduce((a,b) => a + parseInt(b.proteins), 0)
    // console.log(totalProteins)
    const totalFats = response.data.reduce((a,b) => a + parseInt(b.fats), 0)
    // console.log(totalFats)
    this.setState({
      data: response.data,
      totalCalories: totalCalories,
      totalProteins: totalProteins,
      totalFats: totalFats
    })
  })
}

deleteItem = id => {
  API.deleteFood(id)
  .then(res => this.loadFoods())
  .catch(err => console.log(err));
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
                <th>Protein</th>
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
                    <td>{each.proteins}g</td>
                    <td>{each.fats}g</td>
                    <MDBBtn rounded color="default" onClick={() => this.deleteItem(each._id)}>Delete</MDBBtn> 
                  </tr>
                )
              })}
              <tr>
                <td></td>
                <td><p>Total Calories: {this.state.totalCalories}</p></td>
                <td><p>Total Proteins: {this.state.totalProteins}</p></td>
                <td><p>Total Fats: {this.state.totalFats}</p></td>
              </tr>
            </MDBTableBody>
            </MDBTable>
        </Col>
    </Row> 
  );
}
}

export default FoodEntries;