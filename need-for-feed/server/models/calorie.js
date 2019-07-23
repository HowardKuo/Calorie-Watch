const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calorieschema = new Schema({
  title: { type: Number, required: true },
  calorie: { type: Number, required: true },
  protein: Number,
  sugars: { type: Number, required: true },
  carbs: { type: Number, required: true },
});

const calorie = mongoose.model('calorie', calorieschema);

module.exports = calorie;