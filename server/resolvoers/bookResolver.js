const _ = require('lodash')

//dummy data
var books = [{
        name: 'Wings of fire',
        gener: 'Fantacy',
        id: "1",
        authorId: "1",
    }, {
        name: 'Harry Potter',
        gener: 'Fantacy',
        id: "2",
        authorId: "1",
    },
    {
        name: 'The logn earth',
        gener: 'Sci-Fi',
        id: "3",
        authorId: "3",
    }
]

const getBookById = (id) => {
    return _.find(books, {
        id
    })
}

const allBooks = () => {
    return books
}

const getBooksWirttenBy = (authorId) => {    
    return _.filter(books, {
        authorId
    });
}

module.exports = {
    getBookById,
    allBooks,
    getBooksWirttenBy
}