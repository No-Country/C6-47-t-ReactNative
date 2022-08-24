const jwt = require("jsonwebtoken");
const config = require("../config/config");

const getTokens = async (user) => {
  const { id, username } = user;
  const payload = { sub: id, ...user };
  const [access_token, refresh_token] = await Promise.all([
    jwt.sign(payload, config.JWT_SECRET, { expiresIn: "15m" }),
    jwt.sign({ sub: id, username }, config.JWT_REFRESH_SECRET, {
      expiresIn: "15d",
    }),
  ]);

  return {
    access_token,
    refresh_token,
  };
};

module.exports = getTokens;
