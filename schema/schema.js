const Character = require("../models/character")
const Family = require("../models/character")
const Media = require("../models/media")
const Quote = require("../models/quote")
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = graphql

const CharacterType = new GraphQLObjectType({
    name:"Character",
    description:"Describes a Character",
    fields: () => ({
    firstname: {type: new GraphQLNonNull(GraphQLString)},
    lastname: {type: new GraphQLNonNull(GraphQLString)},
    fullname: {type: new GraphQLNonNull(GraphQLString)},
    title: {type: new GraphQLNonNull(GraphQLString)},
//   quoteid:String,
//   familyid:String,
//   mediaid:String,
    })
})