import axios from 'axios';

const BASEURL = "http://api.wolframalpha.com/v2/query?input=sandwich";
const APIKEY = "&appid=2YQXJV-EU99R49WGRy";



export default {
  // Gets all Calories
  getCalories: () => {
    return axios.get('/api/calories');
  },
  // Gets the calorie with the given id
  getCalorie: (id) => {
    return axios.get(`/api/calories/${id}`);
  },
  // Deletes the calorie with the given id
  deleteCalorie: (id) => {
    return axios.delete(`/api/calories/${id}`);
  },
  // Saves a calorie to the database
  saveCalorie: (calorieData) => {
    return axios.post('/api/calories', calorieData);
  },
  getFoods: (query) => {
    return axios.get(BASEURL + query + APIKEY);
  }
};