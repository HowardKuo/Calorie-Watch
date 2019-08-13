const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  title: { type: String, required: true },
  calories: { type: Number, required: true},
  proteins: { type: Number, required: true},
  fats: { type: Number, required: true},
  date: { type: Date, default: Date.now }
  
  
});



module.exports = Food = mongoose.model("food", foodSchema);;
