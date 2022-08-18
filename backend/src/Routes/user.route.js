const { Router } = require("express");
const controller = require("../controllers/user.controller");

const routerUser = Router();

routerUser.route("/user").get(controller.getAll);

routerUser.route("/user/username").get(controller.findByUsername);

module.exports = routerUser;
