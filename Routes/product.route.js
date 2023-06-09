//This folder contains all the route for the application
const express = require("express");
const router = express.Router();
const product = require("../ProductSchema/ProductSchema.js");


// function to handle creation of new products
router.post("/", async (req, res, next) => {
  try {
    const products = new product(req.body);
    const result = await products.save();
    res.send(result);
  } catch (error) {
    console.error(error);
  }

  // const {name, price} = req.body
  // const products = new product({
  //     name,
  //     price
  // });

  // products.save()
  //     .then((result) => {
  //         res.send(result)
  //         console.log(result);

  //     })
  //     .catch((err) => {
  //         console.log(err);
  //     });
});

//function get list of products
router.get("/", async (req, res) => {
  try {
    const listOfProducts = await product.find({}, { __v: 0 });
    res.send(listOfProducts);
  } catch (error) {
    console.log(error);
  }
});

//fucntion to get single product
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const singleProduct = await product.findById(id,
      { __v: 0 }
    );
    res.send(singleProduct);

  } catch (error) {
    console.log(error);
  }
});

//function to update a single product
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body
    const Option = {new : true}
    const updatedProduct = await product.findByIdAndUpdate(id, body, Option);
    res.send(updatedProduct);
  } catch (error) {
    console.log(error);
  }
});

// function to delete product by id
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
try {
  
  const deletedProduct = await product.findByIdAndDelete(id);
  res.send(deletedProduct);
  
} catch (error) {
  console.log(error);
}

});


module.exports = router;
