const Response = require("../../Controllers/Response");
const knex = require("../../db/knex");

async function getAllProducts(req, res) {
  try {
    const products = await knex("products");

    const data = await products;
    if (data.length !== 0) {
      Response(req, res, 200, data);
    } else {
      Response(req, res, 400, "table products is empty");
    }
  } catch (error) {
    Response(req, res, 500, error.message);
  }
}
async function getSingleProduct(req, res) {
  try {
    const products = await knex("products").where("id", req.params.id);

    const data = await products;
    if (data) {
      Response(req, res, 200, data);
    } else {
      Response(req, res, 400, "product not found");
    }
  } catch (error) {
    Response(req, res, 500, error.message);
  }
}

module.exports = { getAllProducts, getSingleProduct };
