const mongoose = require('mongoose');
const db = require('../models');

// This file empties the calories collection and inserts the calories below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/calories',
);

const calorieSeed = [
  {
    food: 'pizza',
    calories: 10,
    description:
      'not very healthy',
    image: 'Seed Data',
    link: 'Seed Data',
  },
  
];

db.calorie
  .remove({})
  .then(() => db.calorie.collection.insertMany(calorieSeed))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });