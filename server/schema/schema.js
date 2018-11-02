const graphql = require('graphql')
const _ = require('lodash')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
} = graphql;

//dummy data
var books = [{
        name: 'Wings of fire',
        gener: 'Fantacy',
        id: "1",
    }, {
        name: 'Harry Potter',
        gener: 'Fantacy',
        id: "2",
    },
    {
        name: 'The logn earth',
        gener: 'Sci-Fi',
        id: "3",
    }
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        gener: {
            type: GraphQLString
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: {
                    type: GraphQLString
                }
            },
            resolve(parent, args) {
                return _.find(books, {
                    id: args.id
                })
            }
        },
        books:{
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})