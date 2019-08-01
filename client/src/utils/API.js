import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    return axios.get("/api/wolf", { params: { q: "title:" + q } });
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/foods");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/foods/" + id);
  },
  // Saves an book to the database
  saveBook: function(foodData) {
    return axios.post("/api/foods", foodData);
  }
};
