const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const serviceUser = require("../services/user.services");
const serviceRole = require("../services/roles.services");

const config = require("../config/config");
const jwt = require("jsonwebtoken");

passport.use(
  "register",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
        const salt = bcrypt.genSaltSync(10);
        const passwordHashed = await bcrypt.hash(password, salt);

        const userRegistered = await serviceUser.registerUser({
          username: username,
          password: passwordHashed,
        });

        if (!userRegistered.error) return done(null, userRegistered);
        else return done(null, false, { message: userRegistered.error });
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async (username, password, done) => {
      try {
        const resp = await serviceUser.findByUsername(username);
        if (resp.error) return done(null, false, { message: "User not found" });

        const user = resp.resp.dataValues;

        const validate = await bcrypt.compare(password, user.password);
        if (!validate) return done(null, false, { message: "Wrong password" });

        return done(null, user, { message: "Login Successfully." });
      } catch (error) {
        done(error);
      }
    }
  )
);

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({ error: "No token provided." });

    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.userId = decoded.user.id;

    const respUser = await serviceUser.getById(req.userId);
    req.user = respUser.resp.dataValues;

    if (!req.user) return res.status(404).json({ error: "No user found." });

    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const respRoles = await serviceRole.getById(req.user.roleId);
    const role = respRoles.resp.dataValues;

    if (role.role !== "admin")
      return res
        .status(401)
        .json({ error: "Don't have permissions to do this." });

    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = { verifyToken, isAdmin };
