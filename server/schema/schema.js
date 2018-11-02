const graphql = require('graphql')
const booksQuery = require('./queries/bookQuery')
const authorsQuery = require('./queries/authorQuery')
const authorMutation = require('./mutations/AuthorMutation')
const bookMutation = require('./mutations/BookMutation')

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

const Mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: authorMutation.addAuthor,
        addBook: bookMutation.addBook
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
})