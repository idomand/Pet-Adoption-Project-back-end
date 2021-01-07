const express = require("express");
const petsRouter = express.Router();

const {
  getAllPets,
  searchPetsByParameters,
  addPet,
  editPet,
  uploadPetImage,
  getPetImages,
  newFunc,
} = require("../controllers/petsControllers");

petsRouter.put("/:id", editPet);
petsRouter.get("/", getAllPets);
petsRouter.post("/", addPet);
petsRouter.get("/:parameters", searchPetsByParameters);
petsRouter.get("/newFunc", newFunc);

petsRouter.get("/getPetImages", getPetImages);
petsRouter.post("/petImages", uploadPetImage);

module.exports = petsRouter;
