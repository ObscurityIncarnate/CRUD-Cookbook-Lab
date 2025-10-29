import express from "express";
import users from "../models/users.js";
import bcrypt from "bcrypt"
import isSignedOut from "../middleware/is_signed_out.js";
import isSignedIn from "../middleware/is_signed_in.js";
const router = express.Router();

router.get("/sign-in",isSignedOut, async (req, res)=>{
    res.render("auth/sign-in");
});
router.post("/sign-in",async (req, res)=>{
    
    try {
        const username = req.body.username
        console.log(req.body)
        const user = await users.findOne({username: username});
        if(!user) res.status(401).send("Invalid Username");
        if(!bcrypt.compareSync(user.password, req.body.password))res.status(401).send("Invalid Password");

        req.session.user = {
            _id: user._id,
            username: user.username
        }

        req.session.save(()=>{
            res.redirect("/")
        })
    } catch (error) {
        res.status(500).send("Something went wrong. Unable to sign in");
    }
});
router.get("/sign-up", isSignedOut, (req, res)=>{
    res.render("auth/sign-up");
});
router.post("/sign-up", async(req, res)=>{
    try {
        const email = req.body.email;
        const password =  req.body.password;
        const username =  req.body.password;
        if(await users.findOne({email: email})) res.status(409).send("Email has already been used");
        if(await users.findOne({username: username})) res.status(409).send("Username is Already Taken");
        if(password !== req.body["confirm-password"]) res.status(409).send("Passwords do not match");

        req.body.password = await bcrypt.hash(password, 12);
        console.log(req.body)
        users.create(req.body)
        console.log("User created Successfully")
    } catch (error) {
        req.status(400).send("Failed to create the account");
    }
});

router.post("/sign-out", isSignedIn, (req, res)=>{
    res.redirect("/")
});
export default router