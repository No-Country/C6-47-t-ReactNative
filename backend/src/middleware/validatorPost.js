const { check } = require('express-validator')
const { validateResult } = require('../utils/validateResult')

const validatorPost = [
	check('userId').exists().withMessage('Se requiere el valor userId').isNumeric().withMessage('El valor userId tiene que ser numerico'),
	check('title').exists().withMessage('Se requiere el valor title').isLength({ min: 5 }).withMessage('El titulo debe contener al menos 5 caracteres').not().isEmpty().withMessage('El titulo no puede estar vacío'),
	check('content').exists().withMessage('Se requiere el valor content').not().isEmpty().withMessage('El contenido no puede estar vacío'),
	(req, res, next) => {
		validateResult(req, res, next)
	},
]

module.exports = { validatorPost }
