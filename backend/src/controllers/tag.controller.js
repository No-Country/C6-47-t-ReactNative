const services = require("../services");

const getByTag = async (req, res) => {
  res.json(await services.tag.getByName("javascript"));
};

module.exports = { getByTag };
