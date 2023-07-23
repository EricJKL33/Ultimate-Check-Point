const jwt = require("jsonwebtoken");
const models = require("../models");

const getUserByEmail = (req, res, next) => {
  models.user
    .findUserByEmail(req.body.email)
    .then(([user]) => {
      if (user != null) {
        req.body.user = user;
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving user from the database");
    });
};

const verifyPassword = async (req, res, next) => {
  if (!req.body.password) {
    res.sendStatus(401);
    return;
  }

  const sentPassword = req.body.password.toString();
  const userPassword = req.body.user[0].password.toString();

  if (sentPassword !== userPassword) {
    res.sendStatus(401);
  } else {
    const token = jwt.sign(
      { id: req.body.user[0].id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).send({ auth: true, token });
    next();
  }
};

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "secretTK") {
      throw new Error("Authorization header has not the 'secret token' type");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user_id = decodedToken.user_id;

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = {
  getUserByEmail,
  verifyPassword,
  verifyToken,
};
