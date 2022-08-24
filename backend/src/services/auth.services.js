const serviceUser = require("./user.services");
const serviceRole = require("./roles.services");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const utils = require("../utils");
const sequelize = require("sequelize");

const register = async (req, username, password, done) => {
  try {
    const { email } = req.body;

    const passwordHashed = await utils.jwtTokens.hashData(password);

    const userRegistered = await serviceUser.registerUser({
      username: username,
      password_hash: passwordHashed,
      email,
    });

    if (userRegistered.error)
      return done(null, false, { message: userRegistered.error });
    else return done(null, userRegistered);
  } catch (error) {
    done(error);
  }
};

const login = async (username, password, done) => {
  try {
    const resp = await serviceUser.findByUsername(username);
    if (resp.error) return done(null, false, { messagE: "User not found." });

    const user = resp.resp.dataValues;
    const validate = await utils.jwtTokens.compareData(
      password,
      user.password_hash
    );
    if (!validate) return done(null, false, { message: "Wrong password" });

    return done(null, user, { message: "Login Successfully." });
  } catch (error) {
    done(error);
  }
};

const logout = async (id) => {
  try {
    const filter = { id, refresh_token_hash: { [sequelize.Op.not]: null } };
    const resp = await serviceUser.findOneAndUpdate(
      { refresh_token_hash: null },
      filter
    );
    return resp;
  } catch (error) {
    return error;
  }
};

const refresh = async (id, refresh_token) => {
  try {
    const resp = await serviceUser.getById(id);
    const user = resp.user;
    if (!user || !user.refresh_token_hash)
      return { statusCode: 403, resp: "Access Denied." };

    const refresh_token_matches = await utils.jwtTokens.compareData(
      refresh_token,
      user.refresh_token_hash
    );

    if (!refresh_token_matches)
      return { statusCode: 403, resp: "Access Denied." };

    const tokens = await utils.jwtTokens.getTokens(user);
    const filter = { id: user.id };
    await serviceUser.findOneAndUpdate(
      { refresh_token_hash: tokens.refresh_token },
      filter
    );
    return { statusCode: 200, resp: tokens };
  } catch (error) {
    return error;
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({ error: "No token provided." });
    req.token = token;

    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.userId = decoded.id;

    const respUser = await serviceUser.getById(req.userId);
    req.user = respUser.user;

    if (!req.user) return res.status(404).json({ error: "No user found." });

    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

const verifyRefreshToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({ error: "No token provided." });
    req.token = token;

    const decoded = jwt.verify(token, config.JWT_REFRESH_SECRET);
    req.userId = decoded.id;

    const respUser = await serviceUser.getById(req.userId);
    req.user = respUser.user;

    if (!req.user) return res.status(404).json({ error: "No user found." });

    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const respRoles = await serviceRole.getById(req.user.roleId);
    const role = respRoles.roles;

    if (role.role !== "admin")
      return res
        .status(401)
        .json({ error: "Don't have permissions to do this." });

    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = {
  register,
  login,
  logout,
  refresh,
  verifyToken,
  verifyRefreshToken,
  isAdmin,
};
