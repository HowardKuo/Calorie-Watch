import axios from "axios";

export default {
  // Gets books from the Google API
  getFoods: function(q) {
    return axios.get("/api/wolf", { params: { q: "title:" + q } });
  },
  // Gets all saved books
  getSavedFoods: function() {
    return axios.get("/api/foods");
  },
  // Deletes the saved book with the given id
  deleteFoods: function(id) {
    return axios.delete("/api/foods/" + id);
  },
  // Saves an book to the database
  saveFood: function(foodData) {
    return axios.post("/api/foods", foodData);
  }
};
