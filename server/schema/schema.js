const graphql = require('graphql')
const booksQuery =  require('./queries/bookQuery')
const authorsQuery = require('./queries/authorQuery')

const {
    GraphQLObjectType,
    GraphQLSchema,
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: booksQuery.getBookByIdQuery,
        books: booksQuery.getAllBooksQuery,
        author: authorsQuery.getAuthorByIdQuery,
        authors: authorsQuery.getAllAuthorsQuery
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})