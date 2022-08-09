module.exports = {
	sequelizeErrorParser: (error) => {
		if (error.message === 'Validation error' || error.name === 'SequelizeValidationError') return error.errors[0].message
		else return error.message
	},
}
