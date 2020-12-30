const checkUniqueEmail = (arr, obj) => {
  console.log(obj.email);
  arr.forEach((element) => {
    for (let xx in element) {
      if (obj.email === element[xx].email) {
        console.log("there is a double");
        return;
      }
    }
  });
};

module.exports = { checkUniqueEmail };
