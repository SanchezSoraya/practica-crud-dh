const { Router } = require("express");
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/list", productController.list);

module.exports = router