const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    axios
      .get("http://api.wolframalpha.com/v2/query?input=sandwich&appid=2YQXJV-EU99R49WGR", {
        params
      })
      .then(results =>
        results.data.items.filter(
          result =>
            result.nutritionInfo.title &&
            result.nutritionInfo.infoLink &&
            result.nutritionInfo.authors &&
            result.nutritionInfo.description &&
            result.nutritionInfo.imageLinks &&
            result.nutritionInfo.imageLinks.thumbnail
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
