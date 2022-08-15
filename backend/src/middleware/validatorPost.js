const { check } = require('express-validator')
const { validateResult } = require('../utils/validateResult')

const validatorAddPost = [
	check('userId').exists().withMessage('Value userId required.').isNumeric().withMessage('UserId must be numeric.'),
	check('title').exists().withMessage('Value title required.').isLength({ min: 5 }).withMessage('Title must be at least 5 chars long').not().isEmpty().withMessage('Title cannot be empty'),
	check('content').exists().withMessage('Value content required.').not().isEmpty().withMessage('Content cannot be empty'),
	(req, res, next) => {
		validateResult(req, res, next)
	},
]

module.exports = { validatorAddPost }
