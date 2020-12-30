const fs = require("fs");
const { checkUniqueEmail } = require("../utils/validate");

const filePath = "./petsData.json";

module.exports = class PetsData {
  constructor() {
    this.db = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }
  getAllData = () => {
    return this.db;
  };
  getPetsByType = (type) => {
    let result = this.db.filter((element) => {
      //   console.log(element.type);
      if (element.type === type) {
        return element;
      }
    });
    return result;
  };
};
