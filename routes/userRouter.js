const express = require("express");
const userRouter = express.Router();

const { getData ,signUpNewUser} = require("../controllers/userControllers");

userRouter.get("/", getData);
userRouter.post("/", signUpNewUser);


module.exports = userRouter;
