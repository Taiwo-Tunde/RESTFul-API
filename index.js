
const express = require("express");
const app = express();
const productRoute = require("./Routes/product.route");


app.use("/products", productRoute)




app.listen(3000, () => {
    console.log('listening on port 3000')
})