const { Router } = require("express");
const { categoryList, createNewCategory, updateCategory, delCategory } = require("../controllers/controllers");

const categoryRoutes = Router();

categoryRoutes.get("/", categoryList);
categoryRoutes.post("/", createNewCategory);
categoryRoutes.put("/:id", updateCategory);
categoryRoutes.delete("/:id", delCategory);
module.exports = categoryRoutes;