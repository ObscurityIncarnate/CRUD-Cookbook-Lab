import express from "express";
import Recipe from "../models/recipes.js";
import isSignedIn from "../middleware/is_signed_in.js";
const router = express.Router();

router.get("/", async(req, res)=>{
    try {
        const recipes =  await Recipe.find();
        res.render("recipes/index", {
            recipes
        });
    } catch (error) {
         res.status(500).send("Something Unexpected Happened. Please try again!")
    }
});
router.post("/", async (req,res) => {
    try {
        
    } catch (error) {
        
    }
})
router.get("/show/:recipeId", async(req, res)=>{
    try {
        const recipeId = req.params.recipeId;
        const recipe = await Recipe.findById(recipeId);
        if(recipe){
            res.render("recipes/show", {
                recipe
            });
        }
    } catch (error) {
        res.status(500).send("Something Unexpected Happened. Please try again!")
    }
})
router.delete("/show/:recipeId", async (req, res) => {
    
})
router.get("/new", isSignedIn, (req, res)=>{
    res.render("recipes/new");
})
router.get("/edit/:recipeId", isSignedIn, async (req, res)=>{
    try {
        const recipeId = req.params.recipeId;
        const recipe = await Recipe.findById(recipeId);
        if(recipe){
            res.render("recipes/show", {
                recipe
            });
        }
    } catch (error) {
        res.status(500).send("Something Unexpected Happened. Please try again!")
    }
})
router.put("/edit/:recipeId", isSignedIn, (req, res)=>{

})

export default router;