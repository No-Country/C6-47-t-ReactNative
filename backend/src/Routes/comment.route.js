const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middleware/");

const routerComment = Router();

routerComment
  .route("/comment/:postId")
  .post(
    middlewares.validators.validatorComment,
    middlewares.auth.verifyToken,
    controllers.comment.commentPost
  );

module.exports = routerComment;
