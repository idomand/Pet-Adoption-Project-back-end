const express = require("express");
const petsRouter = express.Router();

const {
  getAllPets,
  searchPetsByParameters,
  addPet,
  editPet,
} = require("../controllers/petsControllers");

petsRouter.put("/:id", editPet);
petsRouter.get("/", getAllPets);
petsRouter.get("/:parameters", searchPetsByParameters);
petsRouter.post("/", addPet);

module.exports = petsRouter;
