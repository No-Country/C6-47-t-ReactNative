const auth = require("./auth.services");
const post = require("./post.services");
const roles = require("./roles.services");
const user = require("./user.services");
const tag = require("./tag.services");
const likes = require("./likes.services");

module.exports = { auth, post, roles, user, tag, likes };
