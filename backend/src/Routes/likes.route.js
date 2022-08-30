const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middleware/");

const routerLikes = Router();

routerLikes
  .route("/likes/:postId")
  .post(middlewares.auth.verifyToken, controllers.likes.likePost);

routerLikes.route("/likes/user/:userId").get(controllers.likes.userLikes);

module.exports = routerLikes;
