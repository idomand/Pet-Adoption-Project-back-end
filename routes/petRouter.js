const express = require("express");
const petRouter = express.Router();

const { getData } = require("../controllers/petControllers");

petRouter.get("/", getData);

module.exports = petRouter;
