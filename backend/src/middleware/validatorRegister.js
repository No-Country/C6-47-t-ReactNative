const { check } = require("express-validator");
const { validateResult } = require("../utils/validateResult");

const validatorNewRegister = [
  check("username")
    //este mensaje ya lo maneja "user.services.js" con "registerUser"
    //.exists()
    //.withMessage("Username already taken")
    .isLength({ min: 4 })
    .withMessage("Username must be at least 5 chars long")
    .not()
    .isEmpty()
    .withMessage("Username cannot be empty"),
  check("password")
    .exists()
    .withMessage("Password required to register")
    .isLength({ min: 10 })
    .withMessage("Password must be at least 10 chars long")
    .not()
    .isEmpty()
    .withMessage("Password cannot be empty"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validatorNewRegister };