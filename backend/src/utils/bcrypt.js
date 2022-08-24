const bcrypt = require("bcryptjs");

const hashData = async (data) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(data, salt);
};

const compareData = async (data, hash) => {
  return await bcrypt.compare(data, hash);
};

module.exports = { hashData, compareData };
