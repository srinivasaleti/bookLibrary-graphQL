var _ = require('lodash')

var authors = [{
        name: 'Wings of fire',
        gener: 'Fantacy',
        id: "1",
    },
    {
        name: 'Brandon Sanderson',
        age: 42,
        id: '2'
    },
    {
        name: 'Srinivas Aleti',
        age: 23,
        id: '3'
    },
]

const allAuthros = () => {
    return authors;
}

const getAuthorById = (id) => {
    return _.find(authors, {
        id
    })
}

module.exports = {
    allAuthros,
    getAuthorById
}