import mongoose, { Schema } from "mongoose";

export const powerCollection = "Power";

const powerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    enum: [
      "Super Strength",
      "Flight",
      "Telepathy",
      "Invisibility",
      "Telekinesis",
      "Speed",
      "Healing",
      "Shape-shifting",
    ],
  },
  description: {
    type: String,
    required: true,
  },
});

const PowerModel = mongoose.model(powerCollection, powerSchema);
export default PowerModel;
