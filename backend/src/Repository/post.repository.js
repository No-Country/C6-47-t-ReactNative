const daoFactory = require('../DB/DAO/index')

class repositoryPost {
    constructor(){
        this.dao = daoFactory.getDaoPost()
    }

    getAll = async() => {
        try {
            return await this.dao.getAll()
        } catch (error) {
            return error
        }
    }

    getById = async() => {
        try {
            return await this.dao.getById()
        } catch (error) {
            return error
        }
    }

    addPost = async() => {
        try {
            return await this.dao.addPost()
        } catch (error) {
            return error
        }
    }

    editPost = async() => {
        try {
            return await this.dao.editPost()
        } catch (error) {
            return error
        }
    }

    deletePost = async() => {
        try {
            return await this.dao.deletePost()
        } catch (error) {
            return error
        }
    }
}

module.exports = repositoryPost