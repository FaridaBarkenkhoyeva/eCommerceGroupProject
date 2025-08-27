const { INTEGER } = require("sequelize");
const product = require("../models/Product");
const user = require("../models/User");


const testFunction = async (req, res) => {
  res.send("This is the homepage");
};

const productFunction = async (req, res) => {
  try {
    const allProduct = await product.findAll();
    res.send(allProduct);
  } catch (error) {
    res.json("there was an error:", error.message);
  }
};

const productDetial = async (req, res) => {
const reqId = Number(req.params.id);
  try {
    const selectedProduct = await product.findAll(
        { where: { id: reqId } } 
    );
    res.send(selectedProduct);
  } catch (error) {
    res.json("there was an error:", error.message);
  }
};



const createNewProduct = async (req, res) => {
  // res.send(req.body)
  const { id, Name, description, price,  categoryId } = req.body;
  console.log(req.body)
  try {
    await product.create({
      id : id,
      Name: Name,
      description: description,
      price: Number(price),
      categoryId: Number(categoryId),
    });
    res.send("Product Created!");
  } catch (error) {
    res.json({"error": error});
  }
};

module.exports = { testFunction,  productFunction, productDetial, createNewProduct };
// module.exports = productFunction;
// module.exports = productDetial;
