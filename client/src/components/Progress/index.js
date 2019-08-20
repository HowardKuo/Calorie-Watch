import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBProgress } from 'mdbreact';
import '../Progress/style.css';
import API from '../../utils/API';

class Progress extends React.Component {
state = {  
    inputCalories: 2000
}

componentDidMount() {
    this.loadCalories();
}

loadCalories = () => {

    API.getFoods(response => {
        console.log(response)
        const totalCalories = response.data.reduce((a,b) => a + parseInt(b.calories), 0) 
        this.setState({
            totalCalories: totalCalories,
            progressBar: (totalCalories/this.state.inputCalories) * 100,
        })
        console.log(this.state.totalCalories, this.state.progressBar, this.state.inputCalories)
    })
}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inputCalories !== this.state.inputCalories) {
      this.loadCalories();
    }
  }


render () {
    return (
        <Row className="block">
            <Col md={12}>
                <div>
                <h3>Progress</h3>
                <Row>
                    <Col md={12}>
                    <MDBProgress material value={this.state.progressBar} height="20px" color="danger" animated>
                        {this.state.totalCalories}
                    </MDBProgress>
                    </Col>
                </Row>
                <Row>
                    <label>Daily Calories: </label>
                    <input type="text"  placeholder={this.state.inputCalories} onChange = {event => this.setState({inputCalories: event.target.value})}  />
                </Row>
                </div>  
            </Col>
        </Row> 
    );
}
}

export default Progress;