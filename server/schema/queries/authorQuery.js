const graphql = require('graphql')
const AuthorResolver = require('../../resolvoers/authorResolver')
const types = require('../types')

const {
    GraphQLID,
    GraphQLList
} = graphql;

const getAllAuthorsQuery = {
    type: new GraphQLList(types.AuthorType),
    resolve(parent, args) {
        return AuthorResolver.allAuthros()
    }
}

const getAuthorByIdQuery = {
    type: types.AuthorType,
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
    getAllAuthorsQuery,
    getAuthorByIdQuery
}