import mongoose from "mongoose";


const recipe = new mongoose.Schema({
    name: {type: String, required: true},
    instructions: {type: String},
    owner: {type: mongoose.Schema.Types.ObjectId("user"), required: true},
    ingredients: {type: []}

})

const RECIPE =mongoose.model("recipe", recipe);

export default RECIPE;