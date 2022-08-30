const Character = require("../models/character")
const Family = require("../models/character")
const Media = require("../models/media")
const Quote = require("../models/quote")
const graphql = require('graphql')
const { GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = graphql

const CharacterType = new GraphQLObjectType({
    name:"Character",
    description:"Describes a Character",
    fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLString)},
    firstname: {type: new GraphQLNonNull(GraphQLString)},
    lastname: {type: new GraphQLNonNull(GraphQLString)},
    fullname: {type: new GraphQLNonNull(GraphQLString)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    quotes:{
        type: new GraphQLList(QuoteType),
        resolve: (parent, args) => {
        return Quote.find({authid: parent.id})
        }
    },
    family:{
        type: FamilyType,
        resolve: (parent, args) => {
        return Family.findById(parent.familyid)
        }

    },
    media:{
        type: MediaType,
        resolve: (parent, args) => {
        return Media.find({authid: parent.id})
        }
    }
})
})

const FamilyType = new GraphQLObjectType({
    name: "Family",
    description: "Describes a House or Family",
    fields: () =>({
    id: {type: new GraphQLNonNull(GraphQLString)},
    house: {type: new GraphQLNonNull(GraphQLString)},
    region: {type: new GraphQLNonNull(GraphQLString)},
    sigil: {type: new GraphQLNonNull(GraphQLString)},
    blazon: {type: new GraphQLNonNull(GraphQLString)},
    seat: {type: new GraphQLNonNull(GraphQLString)},
    words:{type: GraphQLString},
    origin: {type: GraphQLString},
    notes: {type: GraphQLString},
    characters: {
        type: new GraphQLList(CharacterType),
        resolve:(parent, args) => {
        return Character.find({familyid: parent.id})
        }
    }
})
})

const MediaType = new GraphQLObjectType({
    id: {type: new GraphQLNonNull(GraphQLString)},
    name:"Media",
    description:"Includes links to various Media",
    fields: () =>({
    image: {type: new GraphQLNonNull(GraphQLString)},
    gif: {type: new GraphQLNonNull(GraphQLString)},
    poster: {type: GraphQLString},
    wallpaper: {type: GraphQLString},
    art: {type: GraphQLString}
})
})

const QuoteType = new GraphQLObjectType({
    id: {type: new GraphQLNonNull(GraphQLString)},
    name:"Quote",
    description:"Describes a Quote",
    fields: () =>({
    body: {type: new GraphQLNonNull(GraphQLString)},
    episode: {type: GraphQLInt},
    season: {type: GraphQLInt},
    author: {
        type: CharacterType,
        resolve: (parent, args) =>{
        return Author.findById(parent.authid)
        }
    }
})
})

const RootQueryType = new GraphQLObjectType({
    name: "RootQueryType",
    description:"The Root Query",
    fields: {
    character:{
        type:CharacterType,
        description:"A Single Character",
        args:{
        id:{ type: GraphQLString}
        },
        resolve(parent, args){
            return Character.findById(args.id)
        }
    },
    characters:{
        type:new GraphQLList(CharacterType),
        description:"A list of all characters",
        resolve(parent, args){

        }
    },
    family:{
        type:FamilyType,
        description:"A Single Family or House",
        args:{
        id:{ type: GraphQLString}
        },
        resolve(parent, args){
            return Family.findById(args.id);
        }
    },
    families:{
        type:new GraphQLList(FamilyType),
        description:"A list of all families",
        resolve(parent, args){
            
        }
    },
    media:{
        type:MediaType,
        description:"One group of Media for a single Character",
        args:{
        id:{ type: GraphQLString}
        },
        resolve(parent, args){
            return Media.findById(args.id)
        }
    },
    medias:{
        type:new GraphQLList(MediaType),
        description:"A list of all media",
        resolve(parent, args){
            
        }
    },
    quote:{
        type:QuoteType,
        description:"A Single Quote",
        args:{
        id:{ type: GraphQLString}
        },
        resolve(parent, args){
            return Quote.findById(args.id)
        }
    },
    quotes:{
        type:new GraphQLList(QuoteType),
        description:"A list of all quotes",
        resolve(parent, args){
            
        }
    }
    }
})

const RootMutationType = new GraphQLObjectType({
    name: "Mutation",
    description: "The Root Mutation",
    fields: () => ({
    addCharacter:{
        type:CharacterType,
        description:"Add a character",
        args:{
            
        },
        resolve(parent, args){

        }
    },
    addFamily:{
        type:FamilyType,
        description:"Add a family",
        args:{

        },
        resolve(parent, args){
            
        }
    },
    addMedia:{
        type:MediaType,
        description:"Add media for a character",
        args:{

        },
        resolve(parent, args){
            
        }
    },
    addQuote:{
        type:QuoteType,
        description:"Add a quote",
        args:{

        },
        resolve(parent, args){
            
        }
    }
    })
})