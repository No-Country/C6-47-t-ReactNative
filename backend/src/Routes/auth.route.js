const { Router } = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const middlewares = require("../middleware/");

const routerAuth = Router();

routerAuth.post("/register", 
middlewares.validatorRegister.validatorNewRegister, async (req, res, next) => {
  passport.authenticate(
    "register",
    { session: false },
    async (err, user, info) => {
      if (!user) {
        return res.json(info);
      }
      res.json({
        message: "Signup Successfully",
        user: { username: user.username, id: user.id },
      });
    }
  )(req, res, next);
});

routerAuth.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (!user) {
        // const error = new Error("new Error");
        return res.status(404).json(info);
      }
      req.login(user, { session: false }, async (err) => {
        if (err) return next(err);
        const body = {
          username: user.username,
          id: user.id,
          roleId: user.roleId,
        };
        const token = jwt.sign({ user: body }, config.JWT_SECRET);

        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

routerAuth.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({
      message: "All ok! :)",
      user: req.user,
      token: req.query.secret_token,
    });
  }
);

module.exports = routerAuth;
