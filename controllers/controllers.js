const user = require("../Models/User");


const testFunction = async (req, res) => {
  res.send("This is the homepage");
}

const productFunction = async (req, res) => {
  res.send("List of the products");
}


module.exports = testFunction
module.exports = productFunction