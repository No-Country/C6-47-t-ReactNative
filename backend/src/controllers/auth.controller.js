const passport = require("passport");
const utils = require("../utils");

const register = async (req, res, next) => {
  passport.authenticate(
    "register",
    { session: false },
    async (err, user, info) => {
      if (!user) {
        return res.json(info);
      }
      res.json({
        message: "Signup Successfully",
        userId: user.id,
      });
    }
  )(req, res, next);
};

const login = async (req, res, next) => {
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
          email: user.email,
          roleId: user.roleId,
        };

        const tokens = await utils.getTokens(body);

        return res.json(tokens);
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

module.exports = { register, login };
