const { Router } = require("express");
const testFunction = require("../controllers/controllers");
const productFunction = require("../controllers/controllers");

const productRoutes = Router();
productRoutes.get("/", productFunction);

module.exports = productRoutes;
