const { sequelizeErrorParser } = require('../utils/util')
class Repository {
	getAll = async () => {
		return await this.model.findAll({ where: { deletedAt: null }, attributes: ['id', 'userId', 'title', 'content'], raw: true })
	}

	getById = async (id) => {
		try {
			return await this.model.findByPk(id)
		} catch (err) {
			return { error: sequelizeErrorParser(err) }
		}
	}

	createObject = async (object) => {
		try {
			return await this.model.create(object)
		} catch (err) {
			return { error: sequelizeErrorParser(err) }
		}
	}

	updateObject = async (object, id) => {
		try {
			const updated = await this.model.update(object, { where: { id: id } })
			return updated
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
