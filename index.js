
const express = require("express");
const app = express();
const productRoute = require("./Routes/product.route")
const mongoose = require("mongoose");
app.use(express.json());




mongoose.connect("mongodb://localhost:27017/RESTFUL-API" ,{
    useNewUrlParser: true, useUnifiedTopology: true 
}).then( ()=>{
    console.log("Connected")
}).catch( (error)=>{
    console.log("Failed to connect")
})

app.use("/products", productRoute)

app.use((req, res)=>{
res.status(404)
res.send({error:"Product not found"})
})






app.listen(3000, () => {
    console.log('listening on port 3000')
})