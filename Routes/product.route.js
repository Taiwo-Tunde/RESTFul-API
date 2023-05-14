


//This folder contains all the route for the application
const express = require('express');
const router = express.Router();
const product = require("../ProductSchema/ProductSchema.js");


router.get("/", (req, res) => {
    res.send("getting a list of products");
});



router.post("/", (req, res, next) => {
    const {name, price} = req.body
    const products = new product({
        name,
        price
    });

    products.save()
        .then((result) => {
            res.send(result)
            console.log(result);

        })
        .catch((err) => {
            console.log(err);
        });
});



router.get("/:id", (req, res) => {
    res.send("getting a single product");
});


router.patch("/:id", (req, res) => {
    res.send("Updating a single product");
});


router.delete("/:id", (req, res) => {
    res.send("Deleting a single product");
});


router.get("3000/", (req, res) => {
    res.send("Deleting a single product");
});


module.exports =router;