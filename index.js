const express = require("express");
const user = require("./Models/User");
const userRoutes = require("./routers/userRouter");
const productRoutes = require("./routers/productRouter");

const app = express();


user.sync();


app.use("/user", userRoutes)
app.use("/products", productRoutes)

const port = 3000
app.listen(port, () => {console.log("This server is running on port 3000");
})
