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
    title: ''
  };

  componentDidMount() {
    this.setState({ calories: {}, title: '' });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  savecalorie = calorieID => {
    const calorie = this.state.calories.find(calorie => calorie.id === calorieID);
    API.savecalorie({
      title: calorierie.volumeInfo.title,
      author: calorie.volumeInfo.authors[0],
      description: calorie.volumeInfo.description,
      image: calorie.volumeInfo.imageLinks.thumbnail,
      link: calorie.volumeInfo.previewLink
    }).then(() => {
      this.setState({
        calories: this.state.calories.filter(calorie => calorie.id !== calorieID)
      });
    }).catch(err => console.log(err));
  }

  viewcalorie = url => {
    window.location = url;
  }

  showCalories = data => {
    this.setState({ calories: data.data.items });
  }

  searchcalorie = event => {
    event.preventDefault();

    API.getTitles(this.state.title)
    .then(results => this.showCalories(results))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Jumbotron>
            <h1>(React) Google calorie Search</h1>
          </Jumbotron>
        </Row>
        <Row>
          <Container>
            <h2>calorie Search</h2>
            <form>
              <Input
                name='title'
                value={this.state.title}
                onChange={this.handleInputChange}
                placeholder='calorie Title'
              />
              <FormBtn onClick={this.searchcalorie}>
                Search
              </FormBtn>
            </form>
          </Container>
        </Row>
        <Row>
          <Container>
            {this.state.calories.length ? (
              <List>
                {this.state.calories.map(calorie => (
                  <ListItem key={calorie.id}>
                    <Row>
                      <Col size='8'>
                      <strong>
                        {calorie.volumeInfo.title}
                      </strong>
                      </Col>
                      <Col size='4'>
                        <SaveBtn onClick={() => this.savecalorie(calorie.id)} />
                        <ViewBtn onClick={() => this.viewcalorierie(calorie.volumeInfo.previewLink)} />
                      </Col>
                    </Row>
                    <p>Written by {calorie.volumeInfo.authors[0] || "Not provided by Google calories API"}</p>
                    <p className='text-justify'>{calorie.volumeInfo.description}</p>
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