const { Router } = require("express");
const controllers = require("../controllers");

const routerUser = Router();

routerUser.route("/user").get(controllers.user.getAll);

routerUser.route("/user/username").get(controllers.user.findByUsername);

module.exports = routerUser;
