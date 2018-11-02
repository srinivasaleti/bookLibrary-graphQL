const graphql = require('graphql')
const types = require('../types')
const bookResolver = require('../../resolvoers/bookResolver')

const {
    GraphQLString,
    GraphQLID
} = graphql

const addBook = {
    type: types.BookType,
    args: {
        name: {
            type: GraphQLString
        },
        gener: {
            type: GraphQLString
        },
        authorId: {
            type: GraphQLID
        }
    },
    resolve(parent, args) {
        return bookResolver.addBook(args)
    }
}

module.exports = {
    addBook
}