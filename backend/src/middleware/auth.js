const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const services = require("../services");

passport.use(
  "register",
  new localStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    services.auth.register
  )
);

passport.use(
  "login",
  new localStrategy(
    { usernameField: "username", passwordField: "password" },
    services.auth.login
  )
);

const isAdmin = services.auth.isAdmin;
const verifyToken = services.auth.verifyToken;

module.exports = { isAdmin, verifyToken };
