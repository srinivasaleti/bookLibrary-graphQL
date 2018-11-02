const graphql = require('graphql')
const types = require('../types')
const authorResolver = require('../../resolvoers/authorResolver')

const {
    GraphQLString,
    GraphQLInt
} = graphql

const addAuthor = {
    type: types.AuthorType,
    args: {
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    },
    resolve(parent, args) {
        return authorResolver.addAuthor(args);
    }
}

module.exports = {
    addAuthor
}