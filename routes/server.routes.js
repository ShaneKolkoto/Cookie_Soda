const express = require("express");

const router = express.Router();

// Controllers
const Response = require("../Controllers/Response");

// Server
const { getAllProducts, getSingleProduct } = require("../server/Products");
const { Signup, Login, Verify } = require("../server/Users");

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

router.post("/signup", (req, res) => {
  try {
    Signup(req, res);
  } catch (error) {
    Response(req, res, 500, error.message);
  }
});
router.patch("/login", (req, res) => {
  try {
    Login(req, res);
  } catch (error) {
    Response(req, res, 500, error.message);
  }
});
router.get("/verify", (req, res) => {
  try {
    Verify(req, res);
  } catch (error) {
    Response(req, res, 500, error.message);
  }
});
module.exports = router;
