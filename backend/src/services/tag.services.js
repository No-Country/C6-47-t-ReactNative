const TagRepository = require("../Repository/TagRepo");

const Tag = new TagRepository();

const getByName = async (tag) => {
  return await Tag.getByName(tag);
};

const getTags = async () => {
  return await Tag.getObjects(0, 20);
};

module.exports = { getByName, getTags };
