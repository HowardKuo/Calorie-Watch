import axios from 'axios';
import APIKEY from "../config/keys";
const URL = "http://api.wolframalpha.com/v2/query?input=sandwich";

// Export an object containing methods use for accessing googlebooks API
export default {
  // Search for books
  searchCalories: (query) => {
    //console.log(query);
    return axios.get(URL + query + APIKEY);
  },
   // Saves a book to the database
  saveCalorie: function(calorieData) {
    console.log(calorieData);
    return axios.post("/api/calories", calorieData);
  },
  // Gets all saved books
  getCalories: function() {
    return axios.get("/api/calories");
  },
  // Gets the book with the given id
  getCalorie: function(id) {
    return axios.get("/api/calories/" + id);
  },
  // Deletes the book with the given id
  deleteCalorie: function(id) {
    return axios.delete("/api/calories/" + id);
  } 
};


//export default {
  // Gets all Calories
  //getCalorie: () => {
    //return axios.get('/api/calories');
  //},
  // Gets the calorie with the given id
  //getCalories: (id) => {
    //return axios.get(`/api/calories/${id}`);
  //},
  // Deletes the calorie with the given id
  //deleteCalorie: (id) => {
    //return axios.delete(`/api/calories/${id}`);
  //},
  // Saves a calorie to the database
  //saveCalorie: (calorieData) => {
    //return axios.post('/api/calories', calorieData);
  //},
  //getFoods: (calorieFood) => {
    
    //return axios.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer:${calorieFood}`);
  //}


//};