const jwt = require("jsonwebtoken");
const config = require("../config/config");
const serviceUser = require("../services/user.services");
const bcrypt = require("bcryptjs");

const getTokens = async (user) => {
  const payload = { ...user };
  const [access_token, refresh_token] = await Promise.all([
    jwt.sign(payload, config.JWT_SECRET, { expiresIn: "3s" }),
    jwt.sign({ id: payload.id }, config.JWT_REFRESH_SECRET, {
      expiresIn: "15d",
    }),
  ]);

  return {
    access_token,
    refresh_token,
  };
};

const updateRefreshTokenHash = async (id, refresh_token) => {
  const refresh_token_hash = await hashData(refresh_token);
  await serviceUser.editUser({ refresh_token_hash }, id);
};

const hashData = async (data) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(data, salt);
};

const compareData = async (data, hash) => {
  return await bcrypt.compare(data, hash);
};

module.exports = { getTokens, updateRefreshTokenHash, hashData, compareData };
