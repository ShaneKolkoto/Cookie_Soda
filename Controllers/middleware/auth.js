const jwt = require("jsonwebtoken");
const Response = require("../Response");

module.exports = function (req, res, next) {
  //Get token from header
  const token = req.header("x-auth-token");

  //Check if not token
  if (!token) {
    return Response(res, res, 500, "No token, authorisation denied");
  }

  try {
    const decoded = jwt.verify(token, process.env.jwtSecret);

    req.user = decoded.user;
    next();
  } catch (err) {
    return Response(req, res, 400, "No token, authorisation denied");
  }
};
