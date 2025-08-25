const express = require ("express");
const sequelize  = require("./db/db");

const app = express();


app.get("/", (req, res) => {
    res.send("This is the homepage");
})


const port = 3000
app.listen(port, () => {console.log("This server is running on port 3000");
})
