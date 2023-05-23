
const express = require("express");
const app = express();
const productRoute = require("./Routes/product.route")
const mongoose = require("mongoose");
const createError = require("http-errors")
app.use(express.json());




mongoose.connect("mongodb://localhost:27017/RESTFUL-API" ,{
    useNewUrlParser: true, useUnifiedTopology: true 
}).then( ()=>{
    console.log("Connected")
}).catch( (error)=>{
    console.log("Failed to connect")
})

app.use("/products", productRoute)

app.use((req, res, next)=>{
const Err = new Error("Not Found")
Err.status = 404
next(Err)
})
 
//Error handler
// app.use((Err, req, res, next) => {
     
// }




app.listen(3000, () => {
    console.log('listening on port 3000')
})