const express = require("express");
const user = require("./Models/User");

const app = express();


user.sync();

app.get("/", (req, res) => {
    res.send("This is the homepage");
})


const port = 3000
app.listen(port, () => {console.log("This server is running on port 3000");
})
