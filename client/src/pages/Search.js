import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';

import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    foods: [],
    q: '',
    message: "search food to begin"
  };

  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getFoods = () => {
    API.getFoods(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          foods: [],
          message: "No New foods Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getFoods();
  };

  handleFoodSave = id => {
    const food = this.state.foods.find(food => food.id === id);

    API.saveFood({
      title: food.nutritionInfo.title,
      calories: food.nutritionInfo.calories,
      proteins: food.nutritionInfo.proteins,
      fats: food.nutritionInfo.fats

     
    }).then(() => this.getFoods());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Nutrition Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save foods of Interest.</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Food Search" icon="far fa-food">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.foods.length ? (
                <List>
                  {this.state.foods.map(food => (
                    <Food
                      key={food.id}
                      title={food.nutritionInfo.title}
                      subtitle={food.nutritionInfo.subtitle}
                      link={food.nutritionInfo.infoLink}
                      authors={food.nutritionInfo.authors.join(", ")}
                      description={food.nutritionInfo.description}
                      image={food.nutritionInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleFoodSave(food.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Search;