const express = require("express");
const petsRouter = express.Router();

const { getAllPets, getPetsByType } = require("../controllers/petsControllers");

petsRouter.get("/", getAllPets);
petsRouter.get("/:type", getPetsByType);

module.exports = petsRouter;
