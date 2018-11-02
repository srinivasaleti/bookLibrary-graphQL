const graphql = require('graphql')
const BookResolver = require('../../resolvoers/bookResolver')
const types = require('../types')

const {
    GraphQLID,
    GraphQLList
} = graphql;

const getBookByIdQuery = {
    type: types.BookType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    resolve(parent, args) {
        return BookResolver.getBookById(args.id);
    }
}

const getAllBooksQuery = {
    type: new GraphQLList(types.BookType),
    resolve(parent, args) {
        return BookResolver.allBooks()
    }
}

module.exports = {
    getBookByIdQuery,
    getAllBooksQuery,
}