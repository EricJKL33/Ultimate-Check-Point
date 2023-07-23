const checkUser = (req, res) => {
  res.status(200).send(req.body.user[0]);
};

module.exports = {
  checkUser,
};
