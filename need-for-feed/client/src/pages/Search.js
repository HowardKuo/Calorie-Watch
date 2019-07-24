import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import ViewBtn from '../components/ViewBtn';
import SaveBtn from '../components/SaveBtn';
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Detail extends Component {
  state = {
    calories: {},
    food: ''
  };

  componentDidMount() {
    this.setState({ calories: {}, food: '' });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  saveCalorie = calorieID => {
    const calorie = this.state.calories.find(calorie => calorie.id === calorieID);
    API.saveCalorie({
      food: calorie.nutritionInfo.food,
      calories: calorie.nutritionInfo.calories[0],
      description: calorie.nutritionInfo.description,
      image: calorie.nutritionInfo.imageLinks.thumbnail,
      link: calorie.nutritionInfo.previewLink
    }).then(() => {
      this.setState({
        calories: this.state.calories.filter(calorie => calorie.id !== calorieID)
      });
    }).catch(err => console.log(err));
  }

  viewCalorie = url => {
    window.location = url;
  }

  showCalories = data => {
    this.setState({ calories: data.data.items });
  }

  searchCalorie = event => {
    event.preventDefault();

    API.getFoods(this.state.food)
    .then(results => this.showCalories(results))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron>
            <h1>(React) Nutrition calorie Search</h1>
          </Jumbotron>
        </Row>
        <Row>
          <Container>
            <h2>calorie Search</h2>
            <form>
              <Input
                name='food'
                value={this.state.food}
                onChange={this.handleInputChange}
                placeholder='food nutrition'
              />
              <FormBtn onClick={this.searchCalorie}>
                Search
              </FormBtn>
            </form>
          </Container>
        </Row>
        <Row>
          <Container>
            {this.state.calories.length? (
              <List>
                {this.state.calories.map(calorie => (
                  <ListItem key={calorie.id}>
                    <Row>
                      <Col size='8'>
                      <strong>
                        {calorie.nutritionInfo.food}
                      </strong>
                      </Col>
                      <Col size='4'>
                        <SaveBtn onClick={() => this.saveCalorie(calorie.id)} />
                        <ViewBtn onClick={() => this.viewCalorie(calorie.nutritionInfo.previewLink)} />
                      </Col>
                    </Row>
                    <p>Written by {calorie.nutritionInfo.calories[0] || "Not provided by Google calories API"}</p>
                    <p className='text-justify'>{calorie.nutritionInfo.description}</p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Detail;