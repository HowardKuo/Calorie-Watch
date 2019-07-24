import axios from 'axios';

export default {
  // Gets all Calories
  getCalorie: () => {
    return axios.get('/api/calories');
  },
  // Gets the calorie with the given id
  getCalories: (id) => {
    return axios.get(`/api/calories/${id}`);
  },
  // Deletes the calorie with the given id
  deleteCalorie: (id) => {
    return axios.delete(`/api/calories/${id}`);
  },
   //Saves a calorie to the database
  saveCalorie: (calorieData) => {
    return axios.post('/api/calories', calorieData);
  },
  getFoods: (calorieFood) => {
    
    return axios.get(`https://www.food2fork.com/api/search?key=04a7e07716d64ec5cf3519946915a355&q=:${calorieFood}`);
  }


};