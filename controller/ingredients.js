import express from "express";
import Ingredient from "../models/ingredients.js";

const router = express.Router();

router.get("/", (req, res)=>{
    try {
        const ingredients = Ingredient.find();
        res.render("ingredients/index", {ingredients});
    } catch (error) {
        res.status(500).send("Something Unexpected Happened. Please try again!")
    }
});
export default router;