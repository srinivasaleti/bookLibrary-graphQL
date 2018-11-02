const graphql = require('graphql')
const BookResolver = require('../../resolvoers/bookResolver')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        gener: {
            type: GraphQLString
        }
    })
})

const getBookByIdQuery = {
    type: BookType,
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
    type: new GraphQLList(BookType),
    resolve(parent, args) {
        return BookResolver.allBooks()
    }
}

module.exports = {
    BookType,
    getBookByIdQuery,
    getAllBooksQuery,
}