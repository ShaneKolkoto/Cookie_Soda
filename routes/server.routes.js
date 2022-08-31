const express = require("express");

const router = express.Router();

// Controllers
const Response = require("../Controllers/Response");

// Server
const { getAllProducts, getSingleProduct } = require("../server/Products");

router.get("/", (req, res) => {
  try {
    Response(req, res, 200, "Welcome to Cookie&Soda API");
  } catch (error) {
    Response(req, res, 500, error.message);
  }
});

router.get("/products", (req, res) => {
  try {
    getAllProducts(req, res);
  } catch (error) {
    Response(req, res, 500, error.message);
  }
});
router.get("/product/:id", (req, res) => {
  try {
    getSingleProduct(req, res);
  } catch (error) {
    Response(req, res, 500, error.message);
  }
});
module.exports = router;
