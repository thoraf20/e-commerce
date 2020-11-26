import express from "express";
import data from "./data.js";
import config from "./config.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js";


dotenv.config();

//connection to mongodb
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    createIndexes: true    
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json())

app.use("/api/users", userRoute);

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x=>x._id === productId);
    if(product)
      res.send(product);
    else
      res.send(404).json({msg: "Product Not Found."})
});

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000")
});