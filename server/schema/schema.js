const graphql = require('graphql')
const bookType = require('./types/bookType')
const authorType = require('./types/authorType')

const {
    GraphQLObjectType,
    GraphQLSchema,
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: bookType.getBookByIdQuery,
        books: bookType.getAllBooksQuery,
        author: authorType.getAuthorByIdQuery,
        authors: authorType.getAllAuthorsQuery
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})