var _ = require('lodash')
const Author = require('../modules/author')

const addAuthor = (args) => {
    let author = new Author({
        name: args.name,
        age: args.age
    });
    return author.save()
}

const allAuthros = () => {
    return Author.find({})
}

const getAuthorById = (id) => {
    return Author.findById(id)
}

module.exports = {
    addAuthor,
    allAuthros,
    getAuthorById,
}