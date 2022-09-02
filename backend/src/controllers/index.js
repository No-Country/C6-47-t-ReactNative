const auth = require("./auth.controller");
const post = require("./post.controller");
const user = require("./user.controller");
const tag = require("./tag.controller");
const likes = require("./likes.controller");
const comment = require("./comment.controller");

module.exports = { auth, post, user, tag, likes, comment };
