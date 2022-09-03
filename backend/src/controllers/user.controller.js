const services = require("../services");

const getAll = async (req, res) => {
  res.json(await services.user.getAll());
};

const findByUsername = async (req, res) => {
  const resp = await services.user.findByUsername(req.body.username);
  res
    .status(resp.statusCode)
    .json(resp.resp ? resp.resp : { error: resp.error });
};

module.exports = { getAll, findByUsername };
