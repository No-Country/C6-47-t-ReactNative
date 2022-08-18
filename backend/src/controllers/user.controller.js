const serviceUser = require("../services/user.services");

const getAll = async (req, res) => {
  res.json(await serviceUser.getAll());
};

const findByUsername = async (req, res) => {
  const resp = await serviceUser.findByUsername(req.body.username);
  res
    .status(resp.statusCode)
    .json(resp.resp ? resp.resp : { error: resp.error });
};

module.exports = { getAll, findByUsername };
