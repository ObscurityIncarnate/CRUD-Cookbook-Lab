import mongoose from "mongoose";

const ingredient = new mongoose.Schema({
    name: {type: String, required: true}
})
const INGREDIENTS =  mongoose.model("Ingredient",ingredient);
export default INGREDIENTS;