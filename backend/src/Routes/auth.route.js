const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middleware/");

const routerAuth = Router();

routerAuth.post(
  "/register",
  middlewares.validators.validatorAuth,
  controllers.auth.register
);

routerAuth.post("/login", controllers.auth.login);

routerAuth.post(
  "/logout",
  middlewares.auth.verifyToken,
  controllers.auth.logout
);

routerAuth.post(
  "/refresh",
  middlewares.auth.verifyRefreshToken,
  controllers.auth.refresh
);

// routerAuth.get(
//   "/profile",
//   passport.authenticate("jwt", { session: false }),
//   (req, res, next) => {
//     res.json({
//       message: "All ok! :)",
//       user: req.user,
//       token: req.query.secret_token,
//     });
//   }
// );

module.exports = routerAuth;
