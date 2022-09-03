const passport = require("passport");
const utils = require("../utils");

const services = require("../services");

const register = async (req, res, next) => {
  passport.authenticate(
    "register",
    { session: false },
    async (err, user, info) => {
      if (!user) {
        return res.status(401).json(info);
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

        const tokens = await utils.jwtTokens.getTokens(body);

        await utils.jwtTokens.updateRefreshTokenHash(
          user.id,
          tokens.refresh_token
        );

        return res.json({ message: info.message, tokens });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

const logout = async (req, res) => {
  try {
    const id = req.user.id;
    const resp = await services.auth.logout(id);
    res
      .status(resp.statusCode)
      .json(
        resp.resp ? { message: "Logout Successfully." } : { error: resp.error }
      );
  } catch (error) {
    return error;
  }
};

const refresh = async (req, res) => {
  try {
    const userId = req.user.id;
    const refresh_token = req.token;

    const resp = await services.auth.refresh(userId, refresh_token);

    res.status(resp.statusCode).json(resp.resp);
  } catch (error) {
    return error;
  }
};

module.exports = { register, login, logout, refresh };
