const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calorieSchema = new Schema({
  food: { type: String, required: true },
  calories: { type: Number, required: true },
  protein:{type:Number,require: true},
  sugars: { type: Number, required: true },
  carbs: { type: Number, required: true },
});

const Calorie = mongoose.model('Calorie', calorieSchema);

module.exports = Calorie;