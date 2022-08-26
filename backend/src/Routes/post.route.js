const { Router } = require("express");
const controllers = require("../controllers");
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
    controllers.post.addPost
  )
  //edit testing getObjects
  .get(controllers.post.getObjects);

routerPost
  .route("/post/:id")
  .get(controllers.post.getById)
  .put(
    [middlewares.auth.verifyToken, middlewares.auth.isAdmin],
    controllers.post.editPost
  )
  .delete(
    [middlewares.auth.verifyToken, middlewares.auth.isAdmin],
    controllers.post.deletePost
  );

module.exports = routerPost;
