const express = require("express");
const userRouter = express.Router();

const { getData, signUpNewUser,loginUser } = require("../controllers/userControllers");

userRouter.get("/", getData);
userRouter.post("/", signUpNewUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
