const { Router } = require("express");

const userRoutes = Router();
userRoutes.get("/", (req, res) => {
  res.send("This is the homepage");
});

module.exports = userRoutes;
