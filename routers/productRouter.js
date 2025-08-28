const { Router } = require("express");
const { productFunction, productDetial, createNewProduct, delProduct, updateProduct } = require("../controllers/controllers");

const productRoutes = Router();

productRoutes.get("/", productFunction);
productRoutes.get("/:id", productDetial);
productRoutes.post("/", createNewProduct);
productRoutes.put("/:id", updateProduct);
productRoutes.delete("/:id", delProduct);

module.exports = productRoutes;
