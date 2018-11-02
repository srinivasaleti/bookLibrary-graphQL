const _ = require('lodash')
const Book = require('../modules/book')

const getBookById = (id) => {
    return Book.findById(id)
}

const allBooks = () => {
    return Book.find({})
}

const addBook = (args) => {
    let book = Book({
        name: args.name,
        gener: args.gener,
        authorId: args.authorId
    })

    return book.save()
}

const getBooksWirttenBy = (authorId) => {
    return Book.find({
        authorId
    })
}

module.exports = {
    getBooksWirttenBy,
    addBook,
    getBookById,
    allBooks,
}