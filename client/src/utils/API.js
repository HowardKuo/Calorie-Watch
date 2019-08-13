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
  deleteFood: function(id) {
    return axios.delete("/api/foods/" + id);
  },
  // Saves an book to the database
  saveFood: function(foods, cb) {
    axios.post("/api/foods", foods).then(data => {
      //console.log(data)
      cb(data)
    });
  },
  getUsers: function() {
		return axios.get("/api/users");
	},
	getUser: function(id) {
		return axios.get("/api/users/" + id);
	},
	deleteUser: function(id) {
		return axios.delete("/api/users/" + id);
	},
	saveUser: function(userData) {
		return axios.post("/api/users", userData);
	},
	updateUser: function(id, userData) {
		return axios.post("/api/users/update/" + id, userData);


}

};

