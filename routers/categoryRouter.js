const { Router } = require("express");
const { categoryList, createNewCategory } = require("../controllers/controllers");

const categoryRoutes = Router();

categoryRoutes.get("/", categoryList);
categoryRoutes.post("/", createNewCategory);
module.exports = categoryRoutes;