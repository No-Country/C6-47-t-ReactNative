const services = require("../services");

const getByTag = async (req, res) => {
  res.json(await services.tag.getByName("javascript"));
};

const getTags = async (req, res) => {
  res.json(await services.tag.getTags());
};

module.exports = { getByTag, getTags };
