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
    next();
  }
};

module.exports = {
  getUserByEmail,
  verifyPassword,
};
