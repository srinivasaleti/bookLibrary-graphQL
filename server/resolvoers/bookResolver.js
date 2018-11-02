const _ = require('lodash')

//dummy data
var books = [{
        name: 'Wings of fire',
        gener: 'Fantacy',
        id: "1",
    }, {
        name: 'Harry Potter',
        gener: 'Fantacy',
        id: "2",
    },
    {
        name: 'The logn earth',
        gener: 'Sci-Fi',
        id: "3",
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

module.exports = {
    getBookById,
    allBooks
}