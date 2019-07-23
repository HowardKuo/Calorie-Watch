import axios from 'axios';

export default {
  // Gets all Calories
  getCalories: () => {
    return axios.get('/api/calories');
  },
  // Gets the calorie with the given id
  getcalorie: (id) => {
    return axios.get(`/api/calories/${id}`);
  },
  // Deletes the calorie with the given id
  deletecalorie: (id) => {
    return axios.delete(`/api/calories/${id}`);
  },
  // Saves a calorie to the database
  savecalorie: (calorieData) => {
    return axios.post('/api/calories', calorieData);
  },
  getTitles: (calorieTitle) => {
    return axios.get(`https://www.googleapis.com/calories/v1/volumes?q=title:${calorieTitle}`);
  }
};