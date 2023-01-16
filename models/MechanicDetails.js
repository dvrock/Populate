const mongoose = require("mongoose");

const { Schema } = mongoose;

const MechanicDetailSchema = new Schema({
  mechanic_id: Number,
  Car_Brand_Name: String,
  Car_Model: String,
});
module.exports = mongoose.model("MechanicDetail", MechanicDetailSchema);
