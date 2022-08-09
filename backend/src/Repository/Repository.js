const { sequelizeErrorParser } = require('../utils/util')
class Repository {
	getAll = async () => {
		return await this.model.findAll()
	}

	getById = async (id) => {
		return await this.model.findByPk(id)
	}

	createObject = async (object) => {
		try {
			return await this.model.create(object)
		} catch (err) {
			return { error: sequelizeErrorParser(err) }
		}
	}

	updateObject = async (object) => {
		try {
			return await this.model.update(object, { where: { id: object.id } })
		} catch (err) {
			return { error: sequelizeErrorParser(err) }
		}
	}

	deleteById = async (id) => {
		try {
			return await this.model.destroy({ where: { id: id } })
		} catch (err) {
			return { error: sequelizeErrorParser(err) }
		}
	}
}

module.exports = Repository
