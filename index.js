const express = require("express");
const user = require("./models/User");
const userRoutes = require("./routers/userRouter");
const productRoutes = require("./routers/productRouter");
const product = require("./models/Product");


const app = express();
app.use(express.json());

user.sync();
product.sync();

app.use("/user", userRoutes)
app.use("/products", productRoutes)
// app.use("/products/:id", productRoutes)
const port = 3000
app.listen(port, () => {console.log("This server is running on port 3000");
})
