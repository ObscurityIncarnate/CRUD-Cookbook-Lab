import mongoose from "mongoose";


const recipe = new mongoose.Schema({
    name: {type: String, required: true},
    instructions: {type: String},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "User",required: true},
    ingredients: {type: []}

})

const RECIPE =mongoose.model("Recipe", recipe);

export default RECIPE;