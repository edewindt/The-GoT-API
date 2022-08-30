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
    id:{type: new GraphQLNonNull(GraphQLString)},
    firstname: {type: new GraphQLNonNull(GraphQLString)},
    lastname: {type: new GraphQLNonNull(GraphQLString)},
    fullname: {type: new GraphQLNonNull(GraphQLString)},
    title: {type: new GraphQLNonNull(GraphQLString)},
//   quoteid:String,
//   familyid:String,
//   mediaid:String,
    })
})

const FamilyType = new GraphQLObjectType({
    name: "Family",
    description: "Describes a House or Family",
    fields: () =>({
    house: {type: new GraphQLNonNull(GraphQLString)},
    region: {type: new GraphQLNonNull(GraphQLString)},
    sigil: {type: new GraphQLNonNull(GraphQLString)},
    blazon: {type: new GraphQLNonNull(GraphQLString)},
    seat: {type: new GraphQLNonNull(GraphQLString)},
    words:{type: GraphQLString},
    origin: {type: GraphQLString},
    notes: {type: GraphQLString}
})
})