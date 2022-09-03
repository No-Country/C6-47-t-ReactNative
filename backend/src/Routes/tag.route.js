const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middleware/");

const routerTag = Router();

routerTag.route("/tag").get(controllers.tag.getTags);

module.exports = routerTag;
