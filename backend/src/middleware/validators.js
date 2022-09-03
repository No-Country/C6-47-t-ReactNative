const { check } = require("express-validator");
const utils = require("../utils");

const validatorAuth = [
  check("username")
    .exists()
    .withMessage("Username field required.")
    .isLength({ min: 4 })
    .withMessage("Username must be at least 4 chars long.")
    .not()
    .isEmpty()
    .withMessage("Username cannot be empty."),
  check("password")
    .exists()
    .withMessage("Password field required.")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 chars long.")
    .not()
    .isEmpty()
    .withMessage("Password cannot be empty."),
  check("email")
    .exists()
    .withMessage("Email field required.")
    .isEmail()
    .withMessage("It should be an email."),
  (req, res, next) => {
    utils.validateResult(req, res, next);
  },
];

const validatorAddPost = [
  check("title")
    .exists()
    .withMessage("Value title required.")
    .isLength({ min: 5 })
    .withMessage("Title must be at least 5 chars long")
    .not()
    .isEmpty()
    .withMessage("Title cannot be empty"),
  check("content")
    .exists()
    .withMessage("Value content required.")
    .not()
    .isEmpty()
    .withMessage("Content cannot be empty"),
  check("tagId")
    .exists()
    .withMessage("Value tagId required.")
    .isNumeric()
    .withMessage("tagId must be numeric."),
  check("mediaURL")
    .exists()
    .withMessage("Media URL required.")
    .isString()
    .withMessage("Media URL should be a string."),
  (req, res, next) => {
    utils.validateResult(req, res, next);
  },
];

const validatorComment = [
  check("content")
    .exists()
    .withMessage("Value content is required.")
    .isString()
    .withMessage("Value content must be string.")
    .isLength({ min: 1, max: 50 })
    .withMessage("Content must be at least 1 character and max 50 chars.")
    .not()
    .isEmpty()
    .withMessage("Content cannot be empty."),
  (req, res, next) => {
    utils.validateResult(req, res, next);
  },
];

module.exports = { validatorAuth, validatorAddPost, validatorComment };
