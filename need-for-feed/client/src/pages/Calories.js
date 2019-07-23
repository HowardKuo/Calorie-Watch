import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import ViewBtn from '../components/ViewBtn'
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Calories extends Component {
  state = {
    title: [],
    calories: "",
    protein: "",
    sugars: "",
    carbs: "",
    link:""
  };

  componentDidMount() {
    this.loadCalories();
  }

  loadCalories = () => {
    API.getCalories()
      .then(res =>
        this.setState({
          Calories: res.data,
          title: "",
          author: "",
          description: "",
          image: "",
          link:""
        })
      )
      .catch(err => console.log(err));
  };

  viewCalorie = url => {
    window.location = url;
  }

  deleteCalorie = id => {
    API.deleteCalorie(id)
      .then(res => this.loadCalories())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron>
            <h1>(React) Food Calorie Search</h1>
          </Jumbotron>
        </Row>
        <Row>
          <Container>
            <h2>Saved Calories</h2>
            {this.state.calories.length ? (
              <List>
                {this.state.calories.map(calorie => (
                  <ListItem key={calorie._id}>
                    <img className="float-left mb-1 mr-4" src={calorie.image} alt={calorie.title} />
                    <Row>
                      <Col lPadding="0" size="8">
                      <strong>{calorie.title}</strong>
                      </Col>
                      <Col size="4">
                        <DeleteBtn onClick={() => this.deleteCalorie(calorie._id)} />
                        <ViewBtn onClick={() => this.viewCalorie(calorie.link)} />
                      </Col>
                    </Row>
                    <p>Food Item {calorie.title}</p>
                    <p className="text-justify">{calorie.description}</p>
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

export default Calories;