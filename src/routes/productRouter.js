const { Router } = require("express");
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//listado de producto
router.get("/list", productController.list);

// detalle del producto 
router.get("/detail/:id", productController.detail);

// obtener el formulario 
router.get("/create", productController.create);

//agregando producto 


module.exports = router