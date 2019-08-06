import axios from "axios";


export default  {
  // // Gets books from the Google API
  // getFoods: function(q) {
  //   return axios.get("/api/foods",);
  // },
  // // Gets all saved books
  // getSavedFoods: function() {
  //   return axios.get("/api/foods" + id);
  // },
  // // Deletes the saved book with the given id
  // deleteFood: function(id) {
  //   return axios.delete("/api/foods/" + id);
  // },
  // Saves an book to the database
  saveFood: function(foods) {
    return axios.post("/api/foods", foods);
  }
};
