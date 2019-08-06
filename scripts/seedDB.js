const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/foodlist"
);

const foodSeed = [
  {
    title: "carbonara",
    calories: 10,
    proteins: 30,
    fats:40,
    
    date: new Date(Date.now())
  },
  {
    title: "Lord of the Flies",
    calories: 20,
    proteins:40,
    fats:50,
    date: new Date(Date.now())
  }
];

db.Food
  .remove({})
  .then(() => db.Food.collection.insertMany(foodSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
  
