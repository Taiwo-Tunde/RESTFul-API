
const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.send("getting a list of products");
});


router.post("/", (req, res) => {
    res.send("products created");
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