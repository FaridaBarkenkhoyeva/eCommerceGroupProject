// const { INTEGER } = require("sequelize");
const theproduct = require("../models/Product");
// const user = require("../models/User");


const testFunction = async (req, res) => {
  res.send("This is the homepage");
};

const productFunction = async (req, res) => {
  try {
    const allProduct = await theproduct.findAll();
    res.send(allProduct);
  } catch (error) {
    res.json("there was an error:", error.message);
  }
};

const productDetial = async (req, res) => {
const reqId = Number(req.params.id);
  try {
    const selectedProduct = await theproduct.findAll(
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
    await theproduct.create({
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


const updateProduct = async (req, res) => {
  const reqId = Number(req.params.id);
  const { id, Name, description, price,  categoryId } = req.body;
  try {
    const updated = await theproduct.update(
      { id, Name, description, price,  categoryId }, 
      { where: { id: reqId } }        
    );
    res.send("product Updated");
  } catch (error) {
    res.json("there was an error:", error.message);
  }
}


const delProduct = async (req, res) => {
  try {
    const reqId = Number(req.params.id);
    await theproduct.destroy({
      where: { id: reqId },
    });
    res.send("Product deleted");
  } catch (error) {
    res.json("there was an error:", error.message);
  }
}



module.exports = { testFunction,  productFunction, productDetial, createNewProduct, updateProduct,  delProduct };
// module.exports = productFunction;
// module.exports = productDetial;
