const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

//connection to mongodb
mongoose.connect("mongodb://srinu:test123@ds149593.mlab.com:49593/srinu")
mongoose.connection.once('open', () => {
    console.log("Connected to database")
})

//graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(3000, () => {
    console.log("Listening For Request")
})