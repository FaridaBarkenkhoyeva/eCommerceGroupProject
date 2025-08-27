const { Router } = require("express");
const { productFunction, productDetial, createNewProduct } = require("../controllers/controllers");

const productRoutes = Router();
productRoutes.get("/", productFunction);
productRoutes.get("/:id", productDetial);
productRoutes.post("/", createNewProduct);


module.exports = productRoutes;
