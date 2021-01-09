const express = require("express");
const userRouter = express.Router();

const { getAllUsers, signUpNewUser,loginUser } = require("../controllers/userControllers");

userRouter.get("/", getAllUsers);
userRouter.post("/", signUpNewUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
