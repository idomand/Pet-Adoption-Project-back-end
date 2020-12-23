const TestModel = require("../models/testModel");

const getData = (req, res) => {
  const data = new TestModel();
  res.json(data);
};
module.exports = { getData };
