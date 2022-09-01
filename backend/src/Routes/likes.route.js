const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middleware/");

const routerLikes = Router();

routerLikes
  .route("/like/:postId")
  .post(middlewares.auth.verifyToken, controllers.likes.likePost)
  .get(middlewares.auth.verifyToken, controllers.likes.userLikeByPostId);

routerLikes
  .route("/dislike/:postId")
  .post(middlewares.auth.verifyToken, controllers.likes.dislikePost);

routerLikes.route("/like/user/:userId").get(controllers.likes.userLikes);

module.exports = routerLikes;
