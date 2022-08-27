const TagRepository = require("../Repository/TagRepo");

const Tag = new TagRepository();

const getByName = async (tag) => {
  return await Tag.getByName(tag);
};

module.exports = { getByName };
