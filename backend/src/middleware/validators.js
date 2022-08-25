const { check } = require("express-validator");
const utils = require("../utils");

const validatorAuth = [
  check("username")
    .exists()
    .withMessage("Username field required.")
    .isLength({ min: 4 })
    .withMessage("Username must be at least 5 chars long.")
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
  check("userId")
    .exists()
    .withMessage("Value userId required.")
    .isNumeric()
    .withMessage("UserId must be numeric."),
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
  (req, res, next) => {
    utils.validateResult(req, res, next);
  },
];

module.exports = { validatorAuth, validatorAddPost };
