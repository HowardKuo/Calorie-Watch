import axios from "axios";


export default  {
   
  getFoods: function(cb) {
    return axios.get("/api/foods").then(data => {
      //console.log(data)
      cb(data)
    });;
   },
  // // Gets all saved books
  // getSavedFoods: function() {
  //   return axios.get("/api/foods" + id);
  // },
  // Deletes the saved book with the given id
  deleteFood: function(title) {
    return axios.delete("/api/foods/" + title);
  },
  // Saves an book to the database
  saveFood: function(foods, cb) {
    axios.post("/api/foods", foods).then(data => {
      //console.log(data)
      cb(data)
    });
  }
};
