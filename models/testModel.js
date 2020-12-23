const fs = require("fs");

const filePath = "./data.json";

module.exports = class MyData {
  constructor() {
    this.db = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }
  getAllData = () => {
    return this.db;
  };
};
