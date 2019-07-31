const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get('https://api.edamam.com/api/food-database/parser?ingr=red%20apple&app_id=fc80618b&app_key=e29f77b6cc9b2a86258b178a1e46b2bd', {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.nutritionInfo.label&&
            result.nutritionInfo.measure &&
            result.nutritionInfo.nutrients&&
            result.nutritionInfo.nutrients&&
            result.nutritionInfo.foodId,

            console.log(data)
            
        )
      )
      .then(apiFoods =>
        db.Food.find().then(dbFoods =>
          apiFoods.filter(apiFood =>
            dbFoods.every(dbFood => dbFood.foodId.toString() !== apiFood.id)
          )
        )
      )
      .then(foods => res.json(foods))
      .catch(err => res.status(422).json(err));
  }
};
