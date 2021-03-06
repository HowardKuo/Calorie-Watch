import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBContainer,MDBBtn,MDBModal,MDBModalBody,MDBModalHeader,MDBModalFooter} from "mdbreact";
import Clarifai from "clarifai";
import Loader from "../Spinner";
import "../SearchModal/style.css";
import API from "../../utils/API";


class SearchModal extends Component {
  state = {
    foods: {
      // title: "",
      // calories: "",
      // proteins: "",
      // fats: ""
    },
    q: "",
    message: "search food to begin",
    loading: false,
    modal6: false,
    modal7: false,
    myClarifaiApiKey: "f053c971305549908489be7fc05a6b27",
    myWolframAppId: "KTGHGJ-2Y5RK5JAPX"
  };


  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    API.saveFood(this.state.foods,data => {
      console.log(data)
      window.location.reload()
    })
   // .then(() => this.getFoods());
  };

  getFoods = () => {
    API.getFoods(this.state.q)
      .then(res =>
        this.setState({
          foods: res.data
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

  // handleFoodSave = () => {
  //   //const food = this.state.foods.find(food => food.id === id);

  //   API.saveFood(this.state.foods)
  //   .then(() => this.getFoods());
  // };

  app = new Clarifai.App({ apiKey: this.state.myClarifaiApiKey });

  /*
   Purpose: Pass information to other helper functions after a user clicks 'Predict'
   Args:
     value - Actual filename or URL
     source - 'url' or 'file'
     */

  predict_click = (value, source) => {
    const preview = document.getElementById("food-photo");
    const file = document.querySelector("input[type=file]").files[0];
    const loader = "https://s3.amazonaws.com/static.mlh.io/icons/loading.svg";
    const reader = new FileReader();
    // console.log(file, 'hello')
    // load local file picture
    reader.addEventListener(
      "load",
      () => {
        preview.setAttribute(
          "style",
          `background-image: url("${reader.result}");`
        );
        this.doPredict({ base64: reader.result.split("base64,")[1] });
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
      document.getElementById(
        "food-photo"
      ).innerHTML = `<img src="${loader}" class="loading" />`;
    } else {
      alert("No file selcted!");
    }
  };

  /*
   Purpose: Does a v2 prediction based on user input
   Args:
     value - Either {url : urlValue} or { base64 : base64Value }
  */

  doPredict = value => {
    
    this.app.models.predict(Clarifai.FOOD_MODEL, value).then(
      response => {
        if (response.rawData.outputs[0].data.hasOwnProperty("concepts")) {
          const tag = response.rawData.outputs[0].data.concepts[0].name;
          
          // var url = 'http://api.wolframalpha.com/v2/query?input='+tag+'%20nutrition%20facts&appid='+myWolframAppId;
          const url = `http://api.wolframalpha.com/v2/query?input=${tag}%20nutrition%20facts&appid=${
            this.state.myWolframAppId
          }&output=json`;
          console.log(url);

          this.getNutritionalInfo(url, result => {
            // console.log(result);

            const preParseCalorie = result.pods[4].subpods[0].img.alt;
            // console.log(preParseCalorie);
            const parsedCalorie = preParseCalorie
              .substring(
                preParseCalorie.lastIndexOf("total calories |") + 16,
                preParseCalorie.indexOf(
                  "Cal |",
                  preParseCalorie.lastIndexOf("total calories |")
                )
              )
              .trim();
            console.log("Calories: " + parsedCalorie);

            

            const preParseProtein = result.pods[7].subpods[0].img.alt;
            // console.log(preParseProtein);
            const parsedProtein = preParseProtein
              .substring(
                preParseProtein.lastIndexOf("protein |") + 9,
                preParseProtein.indexOf(
                  "g |",
                  preParseProtein.lastIndexOf("protein |")
                )
              )
              .trim();
            console.log("Protein: " + parsedProtein);

            

            

            const preParseFat = result.pods[6].subpods[0].img.alt;
            // console.log(preParseFat);
            const parsedFat = preParseFat
              .substring(
                preParseFat.lastIndexOf("total fat |") + 12,
                preParseFat.indexOf(
                  "g |",
                  preParseFat.lastIndexOf("total fat |")
                )
              )
              .trim();
            console.log("Fat: " + parsedFat);

            this.setState({
              foods: {
                title: tag,
                fats: parsedFat,
                proteins: parsedProtein,
                calories: parsedCalorie

              }
            })
            console.log(this.state.foods);
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  };

  getNutritionalInfo = (url, cb) => {
    this.doCORSRequest({ method: "POST", url: url, data: url }, cb);
  };

  doCORSRequest = (options, printResult) => {
    const cors_api_url = "https://cors-anywhere.herokuapp.com/";
    const x = new XMLHttpRequest();
    x.open(options.method, cors_api_url + options.url);

    x.onload = x.onerror = function() {
      const responseObject = String(x.responseText);
      // first = responseObject.indexOf("img") + 1
      // firstSub = responseObject.substring(first)
      // second = firstSub.indexOf("img") + 9
      // secondSub = firstSub.substring(second)
      // last = secondSub.indexOf("'")
      // final = secondSub.substring(0,last).replace("&amp;","&")
      printResult(JSON.parse(responseObject).queryresult);
    };

    x.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    x.send(options.data);
  };

render() {
  return (
    <MDBContainer>
      <MDBBtn color="default" onClick={this.toggle(9)}>Upload Image</MDBBtn>
      <MDBModal isOpen={this.state.modal9} toggle={this.toggle(9)} fullHeight position="bottom">
        <MDBModalHeader toggle={this.toggle(9)}><h2 className="title">Let's see what you're eating.</h2></MDBModalHeader>
        <MDBModalBody>
            <Row>
                <Col md={6}>
                  <p>Upload photo below.</p>
                  <form action="#">
                      <input type="file" id="filename" placeholder="Filename" size="100"/>
                      <MDBBtn onClick={() => {
                          this.predict_click(document.getElementById('filename').value, 'file');
                          return false;
                        }
                      }>{ this.state.loading && <Loader /> }
                      &ensp;Get my Nutritional Breakdown!</MDBBtn>
                  </form>
                  <div id="food-photo"></div>
                </Col>
                <Col md={6}>
                  <div id="items">
                    <h4>Food: {this.state.foods.title}</h4>
                    <h5>Calories: {this.state.foods.calories}</h5>
                    <h5>Protein (g): {this.state.foods.proteins}</h5>
                    <h5>Fats (g): {this.state.foods.fats}</h5>
                  </div>
                </Col>
            </Row>
        </MDBModalBody>
        <MDBModalFooter>
          
          <MDBBtn rounded color="default" onClick={this.handleInputChange}>Accept
          
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    )
  }
}

export default SearchModal;
