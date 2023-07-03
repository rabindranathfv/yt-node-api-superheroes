import mongoose, { Schema } from "mongoose";
import { powerCollection } from "./powers.schema";

export const superHeroeCollection = 'Superhero';

const superHeroSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  alterEgo: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  powers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: powerCollection
    }
  ]
})

const SuperHeroeModel = mongoose.model(superHeroeCollection, superHeroSchema)
export default SuperHeroeModel;