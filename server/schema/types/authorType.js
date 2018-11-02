const graphql = require('graphql')
const AuthorResolver = require('../../resolvoers/authorResolver')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    })
})

const getAllAuthorsQuery = {
    type: new GraphQLList(AuthorType),
    resolve(parent, args) {
        return AuthorResolver.allAuthros()
    }
}

const getAuthorByIdQuery = {
    type: AuthorType,
    args: {
        id: {
            type: GraphQLID
        }
    },
    resolve(parent, args) {
        return AuthorResolver.getAuthorById(args.id);
    }
}

module.exports = {
    AuthorType,
    getAllAuthorsQuery,
    getAuthorByIdQuery
}