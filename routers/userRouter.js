const { Router } = require("express");
const testFunction = require("../controllers/controllers");

const userRoutes = Router();
userRoutes.get("/", testFunction);

module.exports = userRoutes;
