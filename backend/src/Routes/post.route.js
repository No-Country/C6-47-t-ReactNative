const { Router } = require("express");
const controller = require("../controllers/post.controller");
const middlewares = require("../middleware/");

const routerPost = Router();

routerPost
  .route("/post")
  .post(
    [
      middlewares.auth.verifyToken,
      middlewares.auth.isAdmin,
      middlewares.validators.validatorAddPost,
    ],
    controller.addPost
  )
  .get(controller.getAll);

routerPost
  .route("/post/:id")
  .get(controller.getById)
  .put(
    [middlewares.auth.verifyToken, middlewares.auth.isAdmin],
    controller.editPost
  )
  .delete(
    [middlewares.auth.verifyToken, middlewares.auth.isAdmin],
    controller.deletePost
  );

module.exports = routerPost;
