const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const serviceAuth = require("../services/auth.services");

passport.use(
  "register",
  new localStrategy(
    { usernameField: "username", passwordField: "password" },
    serviceAuth.register
  )
);

passport.use(
  "login",
  new localStrategy(
    { usernameField: "username", passwordField: "password" },
    serviceAuth.login
  )
);

const isAdmin = serviceAuth.isAdmin;
const verifyToken = serviceAuth.verifyToken;

module.exports = { isAdmin, verifyToken };
