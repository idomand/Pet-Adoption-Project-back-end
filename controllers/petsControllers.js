const PetsDb = require("../models/petsModel");
const petsDb = new PetsDb();
const { cloudinary } = require("../utils/cloudinary");

// ====================

const getAllPets = async (req, res) => {
  const data = await petsDb.getAllData();
  res.json(data);
};

const addPet = async (req, res) => {
  try {
    const result = await petsDb.addNewPet(req.body);
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};

const searchPetsByParameters = async (req, res) => {
  const parameters = req.params.parameters;

  const result = await petsDb.searchPetsByParameters(parameters);
  res.json(result);
};
const editPet = async (req, res) => {
  try {
    const result = await petsDb.editPet(req.body);
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};
const uploadPetImage = async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "petProjectFile",
    });
    res.json({ msg: "yaya" });
  } catch (err) {
    res.status(500).json({ err: "Something went wrong" });
  }
};
const getPetImages = async (req, res) => {
};

const newFunc = async (req, res) => {
  res.json("OKK!!!!!!!!!!1");
};

module.exports = {
  getAllPets,
  searchPetsByParameters,
  addPet,
  editPet,
  uploadPetImage,
  getPetImages,
  newFunc,
};
