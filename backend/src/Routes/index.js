const auth = require("./auth.route");
const post = require("./post.route");
const user = require("./user.route");
const likes = require("./likes.route");
const tag = require("./tag.route");
const comment = require("./comment.route");

module.exports = { auth, post, user, likes, tag, comment };
