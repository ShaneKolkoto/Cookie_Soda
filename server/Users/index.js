const knex = require("../../db/knex");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { v4 } = require("uuid");

// Controllers
const Response = require("../../Controllers/Response");

async function Signup(req, res) {
  try {
    const { name, surname, email, password, DOB, gender, contact_number } =
      req.body;

    // Hash Password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Hash Ends

    let user = await knex("users").where("email", email);

    if (user.length !== 0) {
      return Response(req, res, 400, "Email Already Exsists");
    } else {
      knex("users")
        .insert({
          id: v4(),
          name: name,
          surname,
          email: email,
          password: hash,
          gender: gender,
          DOB: DOB,
          contact_number: contact_number,
        })
        .returning(["*"])
        .then((data) => {
          if (data) {
            return Response(req, res, 200, data);
          }
        });
    }
  } catch (error) {
    return Response(req, res, 500, error.message);
  }
}

async function Login(req, res) {
  try {
    const { email, password } = req.body;
    let user = await knex("users").where("email", email);

    if (user.length === 0) {
      return Response(req, res, 400, "Email not found");
    } else {
      const isMatch = await bcrypt.compare(password, user[0].password);
      if (!isMatch) {
        return Response(req, res, 400, "Password Is Incorrect");
      } else {
        const payload = {
          user: {
            id: user[0].id,
            name: user[0].name,
            surname: user[0].surname,
            email: user[0].email,
            contact_number: user[0].contact_number,
            gender: user[0].gender,
            DOB: user[0].DOB,
            isAdmin: user[0].isAdmin,
            email_verified: user[0].email_verified,
            avatar: user[0].avatar,
          },
        };

        jwt.sign(
          payload,
          process.env.jwtSecret,
          {
            expiresIn: "365d",
          },
          (err, token) => {
            if (err) throw err;
            return Response(req, res, 200, token);
          }
        );
      }
    }
  } catch (error) {
    return Response(req, res, 500, error.message);
  }
}

async function Verify(req, res) {
  const token = req.header("x-auth-token");
  jwt.verify(token, process.env.jwtSecret, (error, decodedToken) => {
    if (error) {
      res.status(401).json({
        error: "Unauthorized Access!",
      });
    } else {
      res.status(200);
      res.send(decodedToken);
    }
  });
}

module.exports = {
  Signup,
  Login,
  Verify,
};
