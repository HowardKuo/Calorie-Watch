const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  id: { type: Number, required: true, unique: true},
  foodName: { type: String, required: true },
  calories: { type: Number, required: true},
  proteins: { type: Number, required: true},
  fats: { type: Number, required: true}
  //title: { type: String, required: true },
  //subtitle: { type: String },
  //authors: { type: [String], required: true },
  //link: { type: String, required: true },
  //description: { type: String, required: true },
  //image: { type: String, required: true },
 // wolfId: { type: String, required: true, unique: true }
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
