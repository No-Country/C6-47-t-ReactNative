const daoPost = require('./post.dao')


const post = new daoPost()

class daoFactory {
    static getDaoPost(){
        return post
    }
}

module.exports = daoFactory