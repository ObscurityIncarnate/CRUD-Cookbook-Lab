import mongoose from "mongoose";

const ingredient = new mongoose.Schema({
    name: {type: String, required: true}
})
const INGREDIENTS =  mongoose.model(ingredient);
export default INGREDIENTS;